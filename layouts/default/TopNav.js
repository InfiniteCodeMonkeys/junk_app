import React, { useState } from "react";
import { useRouter } from "next/router";
import Section from "../../components/primitives/Section";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 45,
    marginRight: theme.spacing(2),
  },
  drawerList: {
    width: 250,
  },
  spacer: {
    flexGrow: 1,
  },

  navLinks: {
    fontFamily: "Helvetica",
    fontWeight: 500,
    color: "#0a5d6c",
    fontSize: "16px",
    paddingRight: "10px",
    paddingLeft: "10px",
    fontWeight: "500",
    letterSpacing: "1px",
    paddingTop: 2,
  },

  search: {
    borderRadius: theme.shape.borderRadius,
    //marginRight: "auto",
    //marginLeft: "10%",
    //width: "100%",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  searchIcon: {
    marginBottom: 2,
    //padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },

  signUpButton: {
    borderRadius: 0,
    color: "white",
    letterSpacing: "1px",
    fontSize: "14px",
    fontFamily: "Helvetica",
    fontWeight: 500,
    backgroundColor: theme.secondary,
    "&:hover": {
      backgroundColor: theme.secondary,
    },
  },
  logInButton: {
    color: "#0e697b",
    borderRadius: "0px",
    letterSpacing: "1px",
    fontSize: "14px",
    fontFamily: "Helvetica",
    fontWeight: 500,
  },
  cartIcon: {
    color: "#adb5bd",
  },

  icons: {
    marginRight: "20px",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: "#fe7f2d",
  },
  iconButtonAvatar: {
    padding: 4,
  },
  startGroup: {
    display: "flex",
    justifySelf: "flex-start",
  },
  endGroup: {
    display: "flex",
    justifySelf: "flex-end",
  },
  appBar: {
    backgroundColor: "#fff",
  },
}));

function Navbar(props) {
  const router = useRouter();
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const logo = props.logo;

  const pathname = router.pathname;

  return (
    <Section bgColor={props.color} size="auto">
      <AppBar position="fixed" className={classes.appBar} elevation={1}>
        <Hidden only={["md", "sm", "xs"]} implementation="css">
          <Toolbar>
            <div className={classes.toolbar}>
              <div className={classes.startGroup}>
                <Link href="/">
                  <a>
                    <img src={logo} alt="Logo" className={classes.logo} />
                  </a>
                </Link>
              </div>

              <div className={classes.endGroup}>
                <div style={{ display: "flex", marginTop: 10 }}>
                  <Typography className={classes.navLinks}>
                    <Link href="/" as="/about">
                      ABOUT US
                    </Link>
                  </Typography>
                  <Typography className={classes.navLinks}>
                    <Link href="/resources">WHY RECYCLE</Link>
                  </Typography>
                </div>

                <Divider
                  orientation="vertical"
                  flexItem
                  style={{ margin: 10 }}
                />

                <div style={{ marginTop: 5 }}>
                  <Link href="/#form" passHref={true}>
                    <Button
                      color="inherit"
                      component="a"
                      variant="contained"
                      className={classes.signUpButton}
                      color="secondary"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Toolbar>
        </Hidden>
        <Hidden only={["lg", "xl"]} implementation="css">
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Link href="/">
              <a>
                <img src={logo} alt="Logo" className={classes.logo} />
              </a>
            </Link>
            <IconButton
              onClick={() => {
                setDrawerOpen(true);
              }}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Hidden>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List
          className={classes.drawerList}
          onClick={() => setDrawerOpen(false)}
        >
          <Link href="/">
            <ListItem button={true} component="a">
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Link href="/how">
            <ListItem button={true} component="a">
              <ListItemText>How it Works</ListItemText>
            </ListItem>
          </Link>
          <Link href="/vendors">
            <ListItem button={true} component="a">
              <ListItemText>For vendors</ListItemText>
            </ListItem>
          </Link>
          <Link href="/marketplace">
            <ListItem button={true} component="a">
              <ListItemText>Marketplace</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Section>
  );
}

export default Navbar;
