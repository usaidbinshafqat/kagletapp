import { Grid, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo from "../logos/logo.png";
import { Typography, AppBar } from "@material-ui/core";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { useHistory } from "react-router-dom";
import React from "react";
import { useRef } from "react";
import { auth } from "../firebaseSetup";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    color: "red",
    alignContent: "center",
    alignItems: "flex-start",
    justify: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    borderRadius: 20,
    padding: "0.25rem 2rem",
    borderColor: "#becddc",
  },
  logo: {
    height: 300,
    width: 300,
    alignContent: "center",
    justify: "center",
    alignItems: "flex-start",
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
  form: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  appicon: {},
  marginPassword: {
    margin: theme.spacing(1),
  },
  textfield: {
    width: 300,
  },
}));

export const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  // firebaseItems
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.error(error);
    }
  };

  var actionCodeSettings = {
    url: "https://kaglet-91224.web.app/login",
    handleCodeInApp: true,
  };

  const signIn = async () => {
    try {
      await auth.sendSignInLinkToEmail(
        emailRef.current!.value,
        actionCodeSettings
      );
      window.localStorage.setItem("emailForSignIn", emailRef.current!.value);
    } catch (error) {
      console.error(error);
    }
  };

  try {
    if (auth.isSignInWithEmailLink(window.location.href)) {
      var email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      } else {
        auth
          .signInWithEmailLink(email, window.location.href)
          .then((result) => {
            window.localStorage.removeItem("emailForSignIn");
            redirectToHomepage();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  } catch (error) {
    console.error(error);
  }

  const signOut = async () => {
    await auth.signOut();
  };

  function redirectToHomepage() {
    window.location.href = "https://kaglet-91224.web.app/home";
  }
  return (
    <div className={classes.root}>
      <Grid container justifyContent="center" direction="column">
        <AppBar position="sticky" elevation={0}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              aria-label="back"
              onClick={() => history.push("/splashscreen")}
            >
              <ArrowBackRoundedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Typography component="div" align="center" style={{ height: "100vh" }}>
          <Grid item>
            <div className="col-centered">
              <img alt="Logo" className={classes.logo} src={logo} />
            </div>
          </Grid>

          <Grid item>
            <form className={classes.form} noValidate autoComplete="on">
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  required
                  color="secondary"
                  variant="outlined"
                  placeholder="@kzoo.edu"
                  inputRef={emailRef}
                  className={classes.textfield}
                  helperText="Please use your @kzoo.edu school email."
                />
              </Grid>
            </form>
          </Grid>

          <Grid item>
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              onClick={signIn}
              className={classes.button}
            >
              Get Login Link
            </Button>
          </Grid>

          <Grid item>
            <Button
              size="large"
              onClick={createAccount}
              color="secondary"
              className={classes.button}
            >
              Signup
            </Button>
          </Grid>
        </Typography>
      </Grid>
    </div>
  );
};
