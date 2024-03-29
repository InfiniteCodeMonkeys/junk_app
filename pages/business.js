import React, { useState, useEffect } from "react";
import firebase from "utils/firebase";
import Head from "next/head";
import Hero from "components/marketing/Hero";
import TestimonialsSection from "components/marketing/TestimonialsSection";
import How from "components/marketing/How";
import CtaSection from "components/marketing/CtaSection";

function Business() {
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

  return (
    <div>
      <Head>
        <title>Junk-drawr | For Business</title>
        <meta name="title" content="Junk Drawr" />
        <meta
          name="description"
          content="Junk Drawr is an electronic waste processing company. We aim to recycle the tons of electronic junk lurking in people's junk drawers."
        />
        <meta property="og:title" content="Junk-drawr | For Business" />
        <meta
          property="og:description"
          content="Junk Drawr is an electronic waste processing company. We aim to recycle the tons of electronic junk lurking in people's junk drawers."
        />
        <meta property="og:image" content="/images/drawr_icon.svg" />
        <link rel="icon" href="/images/drawr_icon.svg" />
      </Head>

      <main>
        <Hero
          title="Put your junk in a box"
          subTitle="Easily recycle unwanted electronics in 5 mins or less"
          //subTitle="We help you sustainably recycle old chargers, earphones, cameras, phones, laptops, and batteries."
        />

        <How />
        <div style={{ backgroundColor: "#f8f8f8", marginBottom: 40 }}>
          <CtaSection
            bg="#f8f8f8"
            textColor="#0e697b"
            size="medium"
            bgImage=""
            bgImageOpacity={1}
            title="Ready to clean out that junk drawer?"
            subtitle="Just pay the shipping to our warehouse and we'll sort & recycle your items for you to help save you hours of time."
            buttonText="Get Started"
            buttonColor="secondary"
            uid={uid}
          />
          <TestimonialsSection
            title="Some Testimonials"
            subtitle="From people like you."
            textColor="#0e697b"
            bgColor="#f8f8f8"
          />
        </div>
      </main>
    </div>
  );
}

export default Business;
