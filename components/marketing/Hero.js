import React from "react";
import Link from "next/link";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: 20,
    fontSize: 48,
    fontWeight: 800,
    color: "#fff",
    zIndex: 1,
    textAlign: "center",
  },
  subTitle: {
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
    backgroundColor: "#a1c181",
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
  return (
    <>
      <div style={{ marginTop: 45 }} />
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
          background: `linear-gradient(0deg, rgba(21, 27, 31, 0.6), rgba(21, 27, 31, 0.6)), url("/images/ewaste_cropped.jpg")`,
        }}
      >
        <Typography variant="h1" className={classes.title}>
          {props.title}
        </Typography>
        <Typography variant="h2" className={classes.subTitle}>
          {props.subTitle}
        </Typography>
        <Link href="/" as="/#form">
          <Button variant="contained" size="large" className={classes.button}>
            Mail my junk
          </Button>
        </Link>
      </div>
    </>
  );
}

export default MarketingHero;
