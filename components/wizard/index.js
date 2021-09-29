import React, { useState, useEffect } from "react";
import firebase from "utils/firebase";
import PutInBox from "./PutInBox";
import TellJunk from "./TellJunk";
import ShowJunk from "./ShowJunk";
import Shipping from "./Shipping";
import { apiRequest } from "utils/util";
import { createOrder } from "utils/db";
import { loadStripe } from "@stripe/stripe-js";

let stripe;
// Load the Stripe script
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, {
  // Pin to specific version of the Stripe API
  apiVersion: "2020-08-27",
}).then((stripeInstance) => {
  // Set stripe so all functions below have it in scope
  stripe = stripeInstance;
});

function index() {
  const [pending, setPending] = useState(false);
  const [data, setData] = useState({});
  const [uid, setUID] = useState();

  useEffect(() => {
    firebase
      .auth()
      .signInAnonymously()
      .then((user) => {
        // Signed in..

        setUID(user.user.uid);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`Error Msg: ${errorMessage} with error code ${errorCode}`);
      });
  }, []);

  const handleSubmit = async () => {
    // Show pending indicator
    setPending(true);

    // Calculate shipping cost
    const getOptions = await apiRequest("get-shipping-rates", "POST", data);
    console.log(getOptions);
    const amount = Number(getOptions[0].amount);

    const shippingCost = amount * 100; //Stripe works in cents so we divide by 100

    setData({ ...data, shippingCost, bestOption: getOptions[0], id: uid });
    // Update Firebase

    createOrder(uid, data).then(async (order) => {
      console.log(order);
      const session = await apiRequest("create-stripe-checkout", "POST", {
        shippingCost,
      });
      console.log(session);
      stripe.redirectToCheckout({
        sessionId: session.id,
      });
      setPending(false);
    });

    // Open Stripe Checkout
  };

  return (
    <>
      <PutInBox />
      <TellJunk data={data} setData={setData} />
      <ShowJunk data={data} />
      <Shipping
        data={data}
        setData={setData}
        pending={pending}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default index;
