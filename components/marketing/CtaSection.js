import React, { useState } from "react";
import Section from "components/primitives/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/primitives/SectionHeader";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { createContact } from "utils/db";
import router from "next/router";
import * as fbq from "utils/pixel";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "0px",
    color: "white",
    letterSpacing: "1px",
    fontSize: "14px",
    fontWeight: 500,
    backgroundColor: "#a1c181",
    "&:hover": {
      backgroundColor: "#a1c181",
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

  const handleSubmit = () => {
    // Write to Firestore
    createContact(props.uid, data).then(() => {
      fbq.event("SignUp", {
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
          <div style={{ display: "flex", margin: 20 }}>
            <TextField
              variant="filled"
              type="text"
              label="Name"
              name="contactName"
              value={data.contactName}
              onChange={handleAddress}
              required
              style={{ marginRight: 40 }}
            />

            <TextField
              variant="filled"
              type="text"
              label="Best Email"
              name="contactEmail"
              value={data.contactEmail}
              onChange={handleAddress}
              required
            />
          </div>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            size="large"
            onClick={handleSubmit}
          >
            {props.buttonText}
          </Button>
        </Container>
      </div>
    </Section>
  );
}

export default CtaSection;
