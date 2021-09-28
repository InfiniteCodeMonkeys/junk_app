import React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/styles";
import Encouragement from "components/primitives/Encouragement";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },

  backButton: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: 0,
  },

  nextButton: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: "#fff",
    borderRadius: 0,
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  textCenter: {
    textAlign: "center",
  },
}));

function Success() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Junk Drawr | Success</title>
        <link rel="icon" href="/images/box.png" />
      </Head>
      <div style={{ marginTop: 60 }} />

      <div className={classes.contentWrapper}>
        <Encouragement
          gifSource="https://giphy.com/embed/3ornjOdkqyUZY3luSI"
          title="Great success!"
          exposition="Check your inbox for your shipping label and tracking number."
        />
      </div>
    </>
  );
}

export default Success;
