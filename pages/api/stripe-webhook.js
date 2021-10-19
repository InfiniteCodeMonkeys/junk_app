const getRawBody = require("raw-body");
const { updateOrderByCustomerId, getOrderByCustomerId } = require("./_db.js");
const stripe = require("./_stripe.js");
const shippo = require("shippo")(process.env.SHIPPO_API_KEY);
const sgMail = require("@sendgrid/mail");

const TEMPLATE_USER = "d-f09a8d85a0ee4517b93fe17ed08600f7";
const TEMPLATE_ADMIN = "d-532fe0f959794f5f89eecf62a818cda5";

const API_KEY = process.env.SENDGRID_KEY; //For send grid

sgMail.setApiKey(API_KEY);

// Disable next.js body parsing (stripe needs the raw body to validate the event)
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const headers = req.headers;

  try {
    const rawBody = await getRawBody(req);

    const stripeEvent = stripe.webhooks.constructEvent(
      rawBody,
      headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET
    );

    console.log(`stripeEvent: ${stripeEvent.type}`);

    // Get the object from stripeEvent
    const object = await stripeEvent.data.object;
    console.log("First Customer: " + object.customer);

    switch (stripeEvent.type) {
      case "checkout.session.completed":
        //Get the order

        //const order = await getOrderByCustomerId("cus_KRGOszzNSFSZyl"); //
        const order = await getOrderByCustomerId(object.customer);

        // Get the rate
        const rate = order.bestOption;

        console.log("Rate: " + rate.object_id);

        // Buy Shipping Label
        const response = await shippo.transaction.create({
          rate: rate.object_id,
          label_file_type: "PDF",
          async: false,
        });

        if (response.label_url != undefined) {
          const transaction = response;
          console.log("Transaction: " + JSON.stringify(transaction));
          console.log("Customer: " + object.customer);
          // Update the current user
          updateOrderByCustomerId(object.customer, {
            // Add payment success status
            status: "SUCCESS/PAID",
            // Add shipping label URL
            shippingLabel: transaction.label_url,
            // Add Tracking URL
            trackingURL: transaction.tracking_url_provider,
            parcelID: transaction.parcel,
            trackingNumber: transaction.tracking_number,
          })
            .then(() => {
              // Use Send Grid to Send Email
              const msg = {
                to: order.address.contactEmail,
                from: "hello@junk-drawr.com",
                template_id: TEMPLATE_USER,
                dynamic_template_data: {
                  shippingURL: transaction.label_url,
                  trackingURL: transaction.tracking_url_provider,
                },
              };
              console.log(msg);
              const adminMsg = {
                to: "mike@junk-drawr.com",
                from: "hello@junk-drawr.com",
                template_id: TEMPLATE_ADMIN,
                dynamic_template_data: {
                  shippingURL: transaction.label_url,
                  trackingURL: transaction.tracking_url_provider,
                },
              };
              sgMail.send(adminMsg);
              sgMail.send(msg);
            })
            .finally(res.send({ status: "success" }));
        } else {
          const err = response;
          console.log("Error: " + err);
          return res.status(400).send({ status: "FAILED", data: err });
        }

        break;

      case "checkout.session.expired":
        //Get the email and recovery URL
        // When a Checkout Session expires, the buyer's email is not returned in
        // the webhook payload unless they give consent for promotional content
        // const email = object.customer_details?.email;
        // const recoveryUrl = object.after_expiration?.recovery?.url;

        // // Do nothing if the Checkout Session has no email or recovery URL
        // if (!email || !recoveryUrl) {
        //   return response.status(200);
        // }

        // // Check if the buyer has consented to promotional emails and
        // // avoid spamming people who abandon Checkout multiple times
        // if (
        //   session.consent?.promotions === "opt_in" &&
        //   !hasSentRecoveryEmailToCustomer(email)
        // ) {
        //   sendRecoveryEmail(email, recoveryUrl);
        // }
        console.log("uh oh");

        break;
    }

    // Send success response
    // res.send({ status: "success" });
  } catch (error) {
    console.log("stripe webhook error", error);

    // Send error response
    res.send({ status: "error", code: error.code, message: error.message });
  }
};
