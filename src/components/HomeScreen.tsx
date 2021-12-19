import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import Grid from "@material-ui/core/Grid";
import { PostButton } from "./PostButton";
import { Typography } from "@material-ui/core";
import { ToolbarAndChips } from "./ToolbarAndChips";
import { EventCardContainer } from "./EventCardContainer";
import firebase from "firebase";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import GoogleFontLoader from "react-google-font-loader";
import { NoSsr } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  title: {
    fontFamily: "'Nunito', 'sans-serif'",
    fontSize: "1.8rem",
    padding: "2px 0.5rem",
    margin: 3,
  },
  subtitle: {
    display: "inline-block",
    fontFamily: "'Sen', sans-serif",
    fontSize: "1.3rem",
    padding: "2px 0.5rem",
    margin: 3,
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

function LoggedOutUI() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: "Nunito", weights: [400, 800] }]} />
      </NoSsr>
      <Grid container direction="column" justifyContent="center">
        <Typography
          component="div"
          align="center"
          ///still figuring out
          style={{ height: "100vh" }}
        >
          {/* Toolbar component being imported from the other screen */}
          <ToolbarAndChips />
          &nbsp;
          <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Typography className={classes.title}>
              Please log in to view awesome K events!
            </Typography>
            &nbsp;
            <Typography className={classes.subtitle}>
              If you've logged in, try again in a non-private window.
            </Typography>
            &nbsp;
            <ThemeProvider theme={theme}>
              <Grid item>
                <Button
                  size="large"
                  variant="outlined"
                  color="primary"
                  className="subheading"
                  style={{ borderRadius: 20, padding: "0.25rem 2rem" }}
                  onClick={() => history.push("/login")}
                >
                  Login
                </Button>
              </Grid>
            </ThemeProvider>
          </Grid>
        </Typography>
      </Grid>
    </>
  );
}

function LoggedInUI() {
  return (
    <Grid container direction="column" justifyContent="center">
      <Typography component="div" align="center" style={{ height: "100vh" }}>
        <ToolbarAndChips />
        &nbsp;
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <EventCardContainer />
        </Grid>
        <Grid item>
          <PostButton />
        </Grid>
      </Typography>
    </Grid>
  );
}
//homescreen function which is checking if the user is logged in or not. If user, then set user id etc etc.
export const HomeScreen = () => {
  const [loggedInUserId, setLoggedInUserId] = useState("");
  useEffect(() => {
    const fetchIsLoggedIn = async () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setLoggedInUserId(user.uid);
        } else {
          setLoggedInUserId("sd");
        }
      });
    };
    fetchIsLoggedIn();
  }, [loggedInUserId]);
  const classes = useStyles();
  //return statement that contains the UI
  return (
    <div className={classes.root}>
      {/* only shows this if the user is logged in (it should contain something in the string if it exists) */}
      {loggedInUserId === "" && (
        <LoggedOutUI />

        //Grid holding all elements in the homescreen UI when logged in
      )}

      {/* otherwise, if it's not an empty string, it should print this. All tags are self-explantory (from Material UI) */}
      {loggedInUserId !== "" && <LoggedInUI />}
    </div>
  );
};
