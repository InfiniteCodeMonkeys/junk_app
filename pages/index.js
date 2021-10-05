import React, { useState, useEffect } from "react";
import firebase from "utils/firebase";
import Head from "next/head";
import Hero from "../components/marketing/Hero";
import How from "components/marketing/How";
import CtaSection from "components/marketing/CtaSection";

export default function Home() {
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
        <title>Junk-drawr | Put your junk in a box</title>
        <meta name="title" content="Junk Drawr" />
        <meta
          name="description"
          content="Junk Drawr is an electronic waste processing company. We aim to recycle the tons of electronic junk lurking in people's junk drawers."
        />
        <meta
          property="og:title"
          content="Junk-drawr | Put your junk in a box"
        />
        <meta
          property="og:description"
          content="Junk Drawr is an electronic waste processing company. We aim to recycle the tons of electronic junk lurking in people's junk drawers."
        />
        <meta property="og:image" content="/images/box.png" />
        <link rel="icon" href="/images/box.png" />
      </Head>

      <main>
        <Hero
          title="Put your junk in a box"
          subTitle="Easily recycle unwanted electronics in 5 mins or less"
          //subTitle="We help you sustainably recycle old chargers, earphones, cameras, phones, laptops, and batteries."
        />
        <How />
        <CtaSection
          bg="#f8f8f8"
          textColor="#0e697b"
          size="medium"
          bgImage=""
          bgImageOpacity={1}
          title="Ready to clean out that junk drawer?"
          subtitle=""
          buttonText="Get Started"
          buttonColor="secondary"
          uid={uid}
        />
      </main>
    </div>
  );
}
