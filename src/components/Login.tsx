import { FormControl, Grid, IconButton, Toolbar } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo from "../logos/logo.png";
import { Typography, AppBar } from "@material-ui/core";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import { auth } from "../firebaseSetup";
import React, { useState, KeyboardEvent, KeyboardEventHandler } from 'react';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core";


//defining the styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
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
    color: '#4C5760'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    //color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#ffcc80',
    '&:hover': {
      backgroundColor: '#f57c00',
    },
  },
}))(Button);

const theme = createTheme({
  palette: {
    secondary: {
      main: '#ffcc80'
    }
  }
});

export interface State extends SnackbarOrigin {
  open: boolean;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

//the actual function coming out of this class hence the export.
  
export const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  });
  const { vertical, horizontal } = state;
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [submitDisabled, setSubmitDisabled] = React.useState(false);
  const [submitDisabled1, setSubmitDisabled1] = React.useState(true);
  const [email1, setEmail] = React.useState("");

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleError = () => {
    setSubmitDisabled(true) ;
  };

  const handleClose = () => {
    setState({ ...state, open: false });
    setOpen(false);
    setOpen1(false);
  };

  const handleEmailInput = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setEmail(event.target.value as string);
    checkValidity();
  };

  function validity() {
    if (emailRef.current!.value.includes("@kzoo.edu")) { 
      signIn();
      handleToggle();
      handleClick({ vertical: 'bottom', horizontal: 'center' });
    }
    else{
      //handleClickOpen();
      handleError();
    }
    };

  function checkValidity() {
    if (emailRef.current!.value  != ""){        
      setSubmitDisabled(false) ;
      setSubmitDisabled1(false) ;
    }
   }

  const buttons = (
    <React.Fragment>
      <ColorButton size="large"
        //variant="outlined"
        //color='#f57c00'
        className={classes.button}
        disabled={submitDisabled1}
        onClick = {() => {validity()}}>
        Get Login Link
      </ColorButton>
    </React.Fragment>
    );


  const handleToggle = () => {
    setOpen(!open);
   };

//enter key check
const handleKeyPress = (event: { key: string; }) => {
  if(event.key === 'Enter'){
   validity();
  }
}

  // firebaseItems
  //getting the email data from the text field
  let emailRef = useRef<HTMLInputElement>(null);
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

  //firebase login items
  try {
    if (auth.isSignInWithEmailLink(window.location.href)) {
      var email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
        redirectToHomepage();
        return <div>Try again in a non-private window.</div>;
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

  //this will be called later.
  const signOut = async () => {
    await auth.signOut();
  };


  //redirects if the user is already logged in
  function redirectToHomepage() {
    window.location.href = "https://kaglet-91224.web.app/home";
  }

  //firebase-ends

  return (
    <div className={classes.root}>
      {/* grid containing all elements in the screen */}
      <Grid container justifyContent="center" direction="column">
        {/* app bar which has the back button */}
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

        {/* this holds the components after the app  */}
        <Typography component="div" align="center" style={{ height: "100vh" }}>
          <Grid item>
            <div className="col-centered">
              <img alt="Logo" className={classes.logo} src={logo} />
            </div>
          </Grid>

          <Grid item>
            <form className={classes.form} noValidate autoComplete="on">
              <Grid item xs={12}>
              <MuiThemeProvider theme={theme}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  //helperText="Incorrect entry."
                  error={submitDisabled}
                  required
                  //color="secondary"
                  variant="outlined"
                  placeholder="@kzoo.edu"
                  inputRef={emailRef}
                  className={classes.textfield}
                  helperText="Please use your @kzoo.edu school email."
                  onKeyPress= {handleKeyPress}
                  onChange={handleEmailInput}
                />
                </MuiThemeProvider>
              </Grid>
            </form>
          </Grid>
              <div>
                {buttons}
                <Snackbar
                  autoHideDuration={10000}
                  anchorOrigin={{ vertical, horizontal }}
                  open={open}
                  onClose={handleClose}
                  message="Link successfully sent"
                  key={vertical + horizontal}
                >
                  <Alert onClose={handleClose} severity="success">
                    Check your email! 🤪
                  </Alert>
                </Snackbar>
                <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                  <CircularProgress color="inherit" />
                </Backdrop>
                <Dialog
                  open={open1}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"Use K email"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      It appears that the email you typed in was not a Kalamazoo College email which, is the only valid email for login.
                    </DialogContentText>
                  </DialogContent>
                </Dialog>
              </div>         
        </Typography>
      </Grid>
    </div>
  );
};

