import firebase from "firebase";
import { Grid } from "@material-ui/core";
import React from "react";
import { NewLoginUI } from "./NewLoginUI";

export const NewSplashScreen = () => {
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
    <div>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <NewLoginUI />
      </Grid>
    </div>
  );
};
