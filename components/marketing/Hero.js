import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography, Button, Hidden, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useForm } from "react-hook-form";
import { createContact } from "utils/db";
import router from "next/router";
import * as fbq from "utils/pixel";
import firebase from "utils/firebase";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: 20,
    fontSize: 72,
    fontWeight: 800,
    color: "#4A4A4A",
    zIndex: 1,
    textAlign: "center",
  },
  subTitle: {
    marginBottom: 40,
    width: "90%",
    fontSize: 32,
    fontWeight: 500,
    color: "#4A4A4A",
    textAlign: "center",
    zIndex: 1,
  },
  mobileTitle: {
    marginBottom: 20,
    fontSize: 48,
    fontWeight: 800,
    color: "#fff",
    zIndex: 1,
    textAlign: "center",
  },
  mobileSubTitle: {
    marginBottom: 20,
    width: "50%",
    fontSize: 24,
    fontWeight: 500,
    color: "#fff",
    textAlign: "center",
    zIndex: 1,
  },
  button: {
    marginBottom: 10,
    color: "#fff",
    backgroundColor: "#3A6336",
    borderRadius: 0,
    zIndex: 1,
  },
  subText: {
    marginTop: 1,
    fontSize: 18,
    color: "#fff",
  },
  link: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 3,
    textDecoration: "underline",
  },
}));

function MarketingHero(props) {
  const classes = useStyles();
  const { handleSubmit } = useForm();
  const [data, setData] = useState({
    contactName: "",
    contactEmail: "",
    status: "Checkout Incomplete",
  });

  const handleAddress = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = () => {
    // Write to Firestore
    createContact(props.uid, data).then(() => {
      fbq.event("SignUp", {
        contactName: data.contactName,
        contactEmail: data.contactEmail,
      });
      firebase.analytics().logEvent("sign_up", {
        contactName: data.contactName,
        contactEmail: data.contactEmail,
      });
      // Router . push with query strings
      router.push({
        pathname: "/wizard",
        query: {
          contactName: data.contactName,
          contactEmail: data.contactEmail,
          id: props.uid,
        },
      });
    });
  };

  return (
    <>
      <Hidden only={["md", "sm", "xs"]} implementation="css">
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "50%",
              zIndex: 0,
              position: "relative",
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1" className={classes.title}>
              {props.title}
            </Typography>
            <Typography variant="h2" className={classes.subTitle}>
              {props.subTitle}
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div style={{ display: "flex", margin: 20 }}>
                <div style={{ backgroundColor: "#fff", marginRight: 40 }}>
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
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  size="large"
                  type="submit"
                >
                  {props.buttonText}
                </Button>
              </div>
            </form>
          </div>
          <div
            style={{ position: "relative", width: 900 }}
            className={classes.image}
          >
            <Image
              src="/images/junkbox_cropped.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </Hidden>
      <Hidden only={["lg", "xl"]} implementation="css">
        <div style={{ marginTop: 45 }}>
          <div
            style={{
              width: "100%",
              zIndex: 0,
              position: "relative",
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              //backgroundColor: "#171718",
              backgroundColor: "#365d63",
              //background: `linear-gradient(0deg, rgba(21, 27, 31, 0.6), rgba(21, 27, 31, 0.6)), url("/images/junkbox_cropped.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Typography variant="h1" className={classes.mobileTitle}>
              {props.title}
            </Typography>
            <Typography variant="h2" className={classes.mobileSubTitle}>
              {props.subTitle}
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div style={{ display: "flex", margin: 20 }}>
                <div style={{ backgroundColor: "#fff", marginRight: 40 }}>
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
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  size="large"
                  type="submit"
                >
                  {props.buttonText}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Hidden>
    </>
  );
}

export default MarketingHero;
