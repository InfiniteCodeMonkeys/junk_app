import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import firebase from "utils/firebase";
import PutInBox from "./PutInBox";
import TellJunk from "./TellJunk";
import ShowJunk from "./ShowJunk";
import Shipping from "./Shipping";
import { apiRequest } from "utils/util";
import { createOrder } from "utils/db";
import { loadStripe } from "@stripe/stripe-js";
import * as fbq from "utils/pixel";

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
  const { handleSubmit } = useForm();
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [data, setData] = useState({});
  const [uid, setUID] = useState();

  const { contactName, contactEmail, id } = router.query;

  useEffect(() => {
    if (!id) {
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
          console.log(
            `Error Msg: ${errorMessage} with error code ${errorCode}`
          );
        });
    } else {
      setUID(id);
    }
  }, []);

  const onSubmit = async () => {
    // Show pending indicator

    setPending(true);

    // Calculate shipping cost

    const getOptions = await apiRequest("get-shipping-rates", "POST", data);
    console.log(getOptions);
    const amount = Number(getOptions[0].amount);

    const shippingCost = amount * 100; //Stripe works in cents so we divide by 100
    console.log(shippingCost);

    if (!getOptions[0].amount) {
      alert("There's a problem with your address or dimensions.");
    } else {
      setData({ ...data, shippingCost, bestOption: getOptions[0], id: uid });
      // Update Firebase

      await createOrder(uid, {
        ...data,
        shippingCost,
        bestOption: getOptions[0],
        id: uid,
        status: "Form Complete/ Checkout Not Confirmed",
      });

      //Send Pixel Info
      fbq.event("Purchase", { currency: "USD", value: shippingCost }); //this does not appear to be working

      const session = await apiRequest("create-stripe-checkout", "POST", {
        shippingCost,
      });

      stripe.redirectToCheckout({
        sessionId: session.id,
      });
      setPending(false);
    }

    // Open Stripe Checkout
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PutInBox />
        <TellJunk data={data} setData={setData} />
        <ShowJunk data={data} />
        <Shipping
          data={data}
          setData={setData}
          pending={pending}
          contactEmail={contactEmail}
          contactName={contactName}
        />
      </form>
    </>
  );
}

export default index;
