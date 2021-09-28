import React from "react";
import Link from "next/link";
import Section from "../../components/primitives/Section";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sticky: {
    marginTop: "auto",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  item: {
    display: "flex",
    flex: "none",
    justifyContent: "center",
    width: "100%",
    marginBottom: 24,
    [theme.breakpoints.up("sm")]: {
      flex: "50%",
    },
  },
  brand: {
    display: "block",
    height: 40,
  },
  social: {
    alignItems: "flex-end",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    lineHeight: 1,
    "&:hover": {
      opacity: 0.8,
    },
    "&:not(:first-of-type)": {
      marginLeft: 20,
    },
  },
  left: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },

  right: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },
  // Move links to end (bottom right)
  // Swaps position with social
  smallLinks: {
    [theme.breakpoints.up("sm")]: {
      order: 1,
    },
  },
}));

function Footer(props) {
  const classes = useStyles();

  const logo = props.logo;

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className={props.sticky && classes.sticky}
    >
      <Container>
        <div className={classes.wrapper}>
          <div className={classes.leftGroup}>
            <div className={`${classes.item} ${classes.left}`}>
              <Link href="/">
                <a>
                  <img src={logo} alt="Logo" className={classes.brand} />
                </a>
              </Link>
            </div>
            <Typography>{props.description}</Typography>
            <div className={`${classes.item} ${classes.left}`}>
              <div style={{ display: "inline-block" }}>
                <a
                  rel="noopener"
                  href="https://app.termly.io/document/cookie-policy/bd32d6ba-94e0-4472-9b09-d8964ab2d949"
                  style={{ fontSize: 12 }}
                >
                  Cookies Policy
                </a>
                <a
                  rel="noopener"
                  href="https://app.termly.io/document/privacy-policy/5e72e0fc-9d7b-43b6-90d5-92076c418a40"
                  style={{ fontSize: 12, marginLeft: 10 }}
                >
                  Privacy Policy
                </a>
                <a
                  rel="noopener"
                  href="https://app.termly.io/document/terms-of-use-for-saas/b106467d-a15d-4052-a960-d88d25323dae"
                  style={{ fontSize: 12, marginLeft: 10 }}
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
          <div className={`${classes.item} ${classes.right} `}>
            <Typography style={{ height: 50 }}>
              <Link href="/faq">
                <a className={classes.link}>FAQ</a>
              </Link>
              <Link href="/about">
                <a className={classes.link}>About Us</a>
              </Link>
              <Link href="/why">
                <a className={classes.link}>Why Recycle</a>
              </Link>
              <Link href="/contact">
                <a className={classes.link}>Contact</a>
              </Link>
            </Typography>
          </div>
          <div
            className={`${classes.item} ${classes.right} ${classes.social} ${classes.smallLinks}`}
          >
            <a
              href="https://twitter.com/junkdrawr"
              target="_blank"
              rel="noopener"
              className={classes.link}
            >
              <TwitterIcon fontSize="small" />
            </a>
            <a
              href="https://facebook.com/junkdrawr"
              target="_blank"
              rel="noopener"
              className={classes.link}
            >
              <FacebookIcon fontSize="small" />
            </a>
          </div>

          {props.copyright && (
            <div className={`${classes.item} ${classes.left}`}>
              <Typography component="p">{props.copyright}</Typography>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
