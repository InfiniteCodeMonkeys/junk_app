import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
const drawerWidth = 240;
const lightColor = "rgba(255, 255, 255, 0.7)";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: "calc(100% - 72px)",
    backgroundColor: "#0a5d6c",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },

  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    //padding: theme.spacing(3),
    backgroundColor: "#fffffd",
    //marginBottom: "120px",
    minHeight: `calc(100vh - 130px)`,
  },
  footer: {
    flexGrow: 1,
    boxSizing: "border-box",
    boxShadow: "0 0 15px, rgba(0,0,0,0.5)",
    //paddingLeft: theme.spacing(2.8),
    paddingTop: theme.spacing(2),
    //background: "#eaeff1",
    position: "fixed",
    bottom: 0,
    //display: "flex",
    //flexDirection: "row",
    justifyContent: "space-between",
    zIndex: theme.zIndex.drawer + 1,
    //marginLeft: `${miniWidth}px`,
    // width: `calc(100% - ${miniWidth}px)`,
    // width: "100%",
    // transition: theme.transitions.create(["width", "margin"], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
  },

  footerShift: {
    boxSizing: "border-box",
    boxShadow: "0 0 15px, rgba(0,0,0,0.5)",
    //paddingLeft: theme.spacing(2.8),
    paddingTop: theme.spacing(2),
    //background: "#eaeff1",
    position: "fixed",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    //marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  stepper: {
    padding: 0,
    overflow: "hidden",
  },
  itemIcon: {
    minWidth: "auto",
    paddingLeft: 8,
    paddingTop: 5,
    marginRight: theme.spacing(2),
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    // color: "rgba(255, 255, 255, 0.7)",
    // "&:hover,&:focus": {
    //   backgroundColor: "rgba(255, 255, 255, 0.08)",
    // },
  },

  secondaryBar: {
    zIndex: 0,
    backgroundColor: "#f6f7f9",
    color: "#1b3a57",
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: "none",
    color: "#1b3a57",
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },

  mainButton: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: "#65b75a",
    "&:hover": {
      backgroundColor: "#65b75a",
    },
  },
  firstButton: {
    marginLeft: theme.spacing(6),
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: "#65b75a",
    "&:hover": {
      backgroundColor: "#65b75a",
    },
  },
  secondButton: {
    borderRadius: "0px",
    letterSpacing: "1.666666px",
    fontSize: "16px",
    fontWeight: 600,
    marginLeft: "20px",
    color: "#0a5d6c",
    "&:hover": {
      backgroundColor: "#0a5d6c",
      color: "#fff",
    },
  },
  completeButton: {
    borderRadius: "0px",
    color: "white",
    letterSpacing: "1.666666px",
    fontSize: "16px",
    fontWeight: 600,
    backgroundColor: "#65b75a",
    "&:hover": {
      backgroundColor: "#65b75a",
    },
  },
  buttonFooter: {
    borderTop: "solid",
    borderTopColor: "#e3e3e3",
    borderTopWidth: "1px",
    backgroundColor: "white",
    width: "100%",
    height: "70px",
    //marginTop: "-70px",
    zIndex: 5000,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexShrink: 0,
  },
  app: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  questions: {
    fontSize: "24px",
    color: "#4d6580",
    marginBottom: "24px",
    lineHeight: 1.25,
    fontWeight: 400,
  },
  sideText: {
    color: "#1e2d3d",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: "24px",
    marginLeft: 15,
  },
  errorText: {
    color: "#ff4136",
  },
}));

const Encouragement = ({ title, exposition, gifSource }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container xs={12}>
        <Grid container item xs={12} className={classes.content}>
          <Container>
            <div style={{ marginTop: 40 }} />
            <Grid item>
              <Typography
                variant="h4"
                align="center"
                style={{ color: "#4a4a4a" }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item style={{ marginTop: 40 }}>
              <Typography
                variant="h5"
                paragraph
                align="center"
                style={{ color: "#4a4a4a" }}
              >
                {exposition}
              </Typography>
            </Grid>
            <Grid
              item
              align="center"
              style={{
                marginTop: 40,
              }}
            >
              <iframe
                src={gifSource}
                width="680"
                height="400"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              />
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Encouragement;
