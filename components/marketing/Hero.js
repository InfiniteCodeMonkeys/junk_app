import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography, Button, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import firebase from "utils/firebase";
import router from "next/router";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: 20,
    fontSize: 72,
    fontWeight: 800,
    // color: "#fff",
    zIndex: 1,
    textAlign: "center",
  },
  subTitle: {
    marginBottom: 40,
    width: "90%",
    fontSize: 32,
    fontWeight: 500,
    //color: "#fff",
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

  const handleClick = () => {
    firebase.analytics().logEvent("Access Wizard", {
      uid: props.uid,
    });
    router.push("/wizard");
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

            <Button
              variant="contained"
              size="large"
              className={classes.button}
              onClick={handleClick}
            >
              Mail my junk
            </Button>
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
            <Link href="/wizard">
              <Button
                variant="contained"
                size="large"
                className={classes.button}
              >
                Mail my junk
              </Button>
            </Link>
          </div>
        </div>
      </Hidden>
    </>
  );
}

export default MarketingHero;
