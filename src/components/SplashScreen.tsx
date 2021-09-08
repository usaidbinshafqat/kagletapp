import { AppBar, Grid, Toolbar } from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import logo from "../logos/logo.png";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import MuiThemeProvider from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    height: 300,
    width: 300,
    alignContent: "center",
    justify: "center",
    alignItems: "flex-start",
  },
  button: {
    alignContent: "center",
    alignItems: "flex-start",
    justify: "center",
    marginTop: theme.spacing(2),
    borderRadius: 20,
    padding: "0.25rem 2rem",
  },
  toolbar: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    backgroundColor: "#ffffff",
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
    color: "#000000",
  },
  field: {
    "& > *": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#EE6C4D",
      light: "#ff9b79",
      dark: "#b53a22",
    },
    secondary: {
      main: "#4C5760",
      light: "#78848d",
      dark: "#242e36",
    },
  },
});

export const SplashScreen = () => {
  const classes = useStyles();
  const history = useHistory();

  //if the user is logged in, it redirects to the home page
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      redirectToHomepage();
    }
  });

  function redirectToHomepage() {
    window.location.href = "https://kaglet.app/home";
  }
  // only dealing with sending to other screens
  return (
    <ThemeProvider theme={theme}>
      <Grid container justify="center" alignItems="center" direction="column">
        <AppBar position="static" elevation={0}>
          <Toolbar className={classes.toolbar}></Toolbar>
        </AppBar>
        <Grid item>
          <div className="col-centeredd">
            <img alt="Logo" className={classes.logo} src={logo} />
          </div>
        </Grid>

        <Grid item>
          <Button
            size="large"
            color="primary"
            variant="contained"
            className={classes.button}
            onClick={() => history.push("/login")}
          >
            Login
          </Button>
        </Grid>

        {/* <Grid item>
          <Button
            size="small"
            color="primary"
            className={classes.button}
            onClick={() => history.push("/home")}
          >
            Home Screen Test
          </Button>
        </Grid> */}
      </Grid>
    </ThemeProvider>
  );
};
