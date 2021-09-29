const getRawBody = require("raw-body");
const { updateOrderByCustomerId, getOrderByCustomerId } = require("./_db.js");
const stripe = require("./_stripe.js");
var shippo = require("shippo")(process.env.SHIPPO_API_KEY);
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
    const object = stripeEvent.data.object;

    switch (stripeEvent.type) {
      case "checkout.session.completed":
        //Get the order

        const order = await getOrderByCustomerId(object.customer); //
        // const order = await getOrderByCustomerId("cus_KIcs3cphRwoaUd");

        // Get the rate
        const rate = order.bestOption;

        console.log(rate.object_id);

        // Buy Shipping Label
        await shippo.transaction.create(
          {
            rate: rate.object_id,
            label_file_type: "PDF",
            async: false,
          },
          async function (err, transaction) {
            // asynchronous callback

            try {
              console.log(transaction);

              // Update the current user
              await updateOrderByCustomerId(object.customer, {
                // Add payment success status
                status: "SUCCESS/PAID",
                // Add shipping label URL
                shippingLabel: transaction.label_url,
                // Add Tracking URL
                trackingURL: transaction.tracking_url_provider,
                parcelID: transaction.parcel,
                trackingNumber: transaction.tracking_number,
              }).then(() => {
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
              });
            } catch {
              return res.status(400).send({ status: "FAILED", data: err });
            }
          }
        );

        break;

      case "invoice.payment_succeeded":
        // If a payment succeeded we update stored subscription status to "active"
        // in case it was previously "trialing" or "past_due".
        // We skip if amount due is 0 as that's the case at start of trial period.
        if (object.amount_due > 0) {
          await updateUserByCustomerId(object.customer, {
            stripeSubscriptionStatus: "active",
          });
        }

        break;

      case "invoice.payment_failed":
        // If a payment failed we update stored subscription status to "past_due"
        await updateUserByCustomerId(object.customer, {
          stripeSubscriptionStatus: "past_due",
        });

        break;

      case "customer.subscription.updated":
        await updateUserByCustomerId(object.customer, {
          stripePriceId: object.items.data[0].price.id,
          stripeSubscriptionStatus: object.status,
        });

        // 💡 You could also read "cancel_at_period_end" if you'd like to email user and learn why they cancelled
        // or convince them to renew before their subscription is deleted at end of payment period.
        break;

      case "customer.subscription.deleted":
        // If a subscription was deleted update stored subscription status to "canceled".
        // Keep in mind this won't be called right away if "Cancel at end of billing period" is selected
        // in Billing Portal settings (https://dashboard.stripe.com/settings/billing/portal). Instead you'll
        // get a "customer.subscription.updated" event with a cancel_at_period_end value.
        await updateUserByCustomerId(object.customer, {
          stripeSubscriptionStatus: "canceled",
        });

        break;

      case "customer.subscription.trial_will_end":
        // This event happens 3 days before a trial ends
        // 💡 You could email user letting them know their trial will end or you can have Stripe do that
        // automatically 7 days in advance: https://dashboard.stripe.com/settings/billing/automatic

        break;

      // no default
    }

    // Send success response
    res.send({ status: "success" });
  } catch (error) {
    console.log("stripe webhook error", error);

    // Send error response
    res.send({ status: "error", code: error.code, message: error.message });
  }
};
