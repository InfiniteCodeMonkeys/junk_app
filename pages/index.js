import React, { useState, useEffect } from "react";
import firebase from "utils/firebase";
import Head from "next/head";
import Hero from "../components/marketing/Hero";
import TestimonialsSection from "components/marketing/TestimonialsSection";
import How from "components/marketing/How";
import CtaSection from "components/marketing/CtaSection";
import { createContact } from "utils/db";
import ExitIntent from "utils/exit";
import { Box, Modal, TextField, Typography, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as fbq from "utils/pixel";

export default function Home() {
  const [uid, setUID] = useState();
  const { handleSubmit } = useForm();
  const [isDesktop, setDesktop] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState({
    contactName: "",
    contactEmail: "",
    status: "Checkout Incomplete",
  });

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

  useEffect(() => {
    if (showPopup) {
      let expiryDate = new Date(Date.now() + 14 * (1000 * 60 * 60 * 24));
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      document.cookie =
        "modal_seen" + "=true; expires=" + expiryDate.toUTCString();
    }
    //setShow(showPopup)
  }, [showPopup]);

  useEffect(() => {
    if (window.innerWidth >= 1450) {
      setDesktop(true);
    }
    if (document.cookie.indexOf("modal_seen=true") < 0) {
      const removeExitIntent = ExitIntent({
        threshold: 30,
        eventThrottle: 100,
        onExitIntent: () => {
          setShowPopup(true);
        },
      });
      return () => {
        removeExitIntent();
      };
    }
  });

  const handleClose = () => setShowPopup(false);

  const handleAddress = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = () => {
    // Write to Firestore
    console.log(uid);
    console.log(data);
    createContact(uid, data).then(() => {
      fbq.event("SignUp", {
        contactName: data.contactName,
        contactEmail: data.contactEmail,
      });

      setShowPopup(false);
    });
  };

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
        <meta property="og:image" content="/images/drawr_icon.svg" />
        <meta
          name="facebook-domain-verification"
          content="cdbmziam437252wilejtjruotkg6ju"
        />
        <link rel="icon" href="/images/drawr_icon.svg" />
      </Head>

      <main>
        {isDesktop && (
          <Modal open={showPopup} onClose={handleClose}>
            <Box
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "40%",
                backgroundColor: "#fff",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
                padding: 40,
              }}
            >
              <Typography variant="h3" align="center">
                Let's keep in touch?
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div
                  style={{
                    display: "flex",
                    marginTop: 20,
                    marginBottom: 20,
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      marginRight: 40,
                    }}
                  >
                    <TextField
                      variant="outlined"
                      type="text"
                      label="Name"
                      name="contactName"
                      value={data.contactName}
                      onChange={handleAddress}
                      required
                      color="#fff"
                    />
                  </div>
                  <div style={{ backgroundColor: "#fff" }}>
                    <TextField
                      variant="outlined"
                      type="text"
                      label="Best Email"
                      name="contactEmail"
                      value={data.contactEmail}
                      onChange={handleAddress}
                      required
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    // marginRight: 50,
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      borderRadius: "0px",
                      color: "white",
                      letterSpacing: "1px",
                      fontSize: "14px",
                      fontWeight: 500,
                      backgroundColor: "#3A6336",
                      "&:hover": {
                        backgroundColor: "#3A6336",
                      },
                    }}
                    size="large"
                    type="submit"
                  >
                    OK
                  </Button>
                </div>
              </form>
            </Box>
          </Modal>
          // <ExitIntentModal
          //   show={showPopup}
          //   handleClose={handleClose}
          //   handleAddress={handleAddress}
          //   title="Let's keep in touch?"
          //   handleSubmit={handleSubmit}
          //   onSubmit={onSubmit}
          // />
        )}

        <Hero
          title="Put your junk in a box"
          subTitle="Easily recycle unwanted electronics in 5 minutes or less"
          uid={uid}
        />

        <How />
        <div style={{ backgroundColor: "#f8f8f8", marginBottom: 40 }}>
          <CtaSection
            bg="#f8f8f8"
            textColor="#63365c"
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
            textColor="#63365c"
            bgColor="#f8f8f8"
          />
        </div>
      </main>
    </div>
  );
}
