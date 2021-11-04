import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Section from "components/primitives/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/primitives/SectionHeader";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { createContact } from "utils/db";
import router from "next/router";
import * as fbq from "utils/pixel";
import firebase from "utils/firebase";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "0px",
    color: "white",
    letterSpacing: "1px",
    fontSize: "14px",
    fontWeight: 500,
    backgroundColor: "#3A6336",
    "&:hover": {
      backgroundColor: "#3A6336",
    },
  },

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
}));

function CtaSection(props) {
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
    <Section
      bgColor={props.bg}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "#f8f8f8",
          paddingTop: 80,
          paddingBottom: 80,
        }}
      >
        <Container className={classes.container}>
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={3}
            textColor={props.textColor}
            //spaced={false}
            className="text-center"
          />
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
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              size="large"
              type="submit"
            >
              {props.buttonText}
            </Button>
          </form>
        </Container>
      </div>
    </Section>
  );
}

export default CtaSection;
