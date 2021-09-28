import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: 20,
    fontSize: 36,
    //fontWeight: 500,
    color: "#fff",
    zIndex: 1,
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
    color: "#a1c181",
    backgroundColor: "#fff",
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
          backgroundColor: "#a1c181",
        }}
      >
        <Typography variant="h1" className={classes.title}>
          {props.title}
        </Typography>
        <Typography variant="h2" className={classes.subTitle}>
          {props.subTitle}
        </Typography>
        <Link href="/" as="/#how">
          <Button
            variant="contained"
            size="large"
            className={classes.button}
            // onClick={handleClick}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </>
  );
}

export default MarketingHero;
