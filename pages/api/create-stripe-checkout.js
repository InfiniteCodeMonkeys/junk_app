const requireAuth = require("./_require-auth.js");
const { getOrder, updateOrder } = require("./_db.js");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2019-12-03",
});

export default requireAuth(async (req, res) => {
  const user = req.user;
  const body = req.body;

  console.log(user);
  console.log(user.uid);

  try {
    let { address, stripeCustomerId } = await getOrder(user.uid);

    const shippingCost = body.shippingCost;

    const total = Math.round(Number(shippingCost) + 200);

    const email = address.contactEmail;
    console.log(email);
    console.log(shippingCost);

    console.log(total);

    // If user does not already have a stripeCustomerId then create a customer in Stripe
    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({ email: email });

      await updateOrder(user.uid, {
        stripeCustomerId: customer.id,
      });

      stripeCustomerId = customer.id;
    }

    //Stripe completes the payment in its own session
    const createSession = async (total) => {
      // Create a checkout session
      const session = await stripe.checkout.sessions.create({
        customer: stripeCustomerId,
        payment_method_types: ["card"],

        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Shipping & Handling",
              },
              unit_amount: total,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        // consent_collection: {
        //   promotions: "auto",
        // },
        // after_expiration: {
        //   recovery: {
        //     enabled: true,
        //   },
        // },
        // Uncomment to allow user to enter a promotional code
        //allow_promotion_codes: true,

        success_url: `${process.env.STRIPE_DOMAIN}/success`,
        cancel_url: `${process.env.STRIPE_DOMAIN}/`,
      });
      console.log(user.uid);
      console.log(session.payment_intent);
      //Update the order in firebase. This is one order for the whole cart. Even if you have multiple items.
      await updateOrder(user.uid, {
        paymentIntent: session.payment_intent,
        stripeCustomerId,
        status: "Entered Checkout",
      });
      // Return success response
      res.send({ status: "success", data: session });
    };

    createSession(total);
  } catch (error) {
    console.log("stripe-create-checkout-session error", error);

    // Return error response
    res.send({ status: "error", code: error.code, message: error.message });
  }
});
