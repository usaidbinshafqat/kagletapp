import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { PostButton } from "./PostButton";
import { Typography } from "@material-ui/core";
import { ToolbarAndChips } from "./ToolbarAndChips";
import { EventCardContainer } from "./EventCardContainer";
import firebase from "firebase";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
}));

export const HomeScreen = () => {
  const [loggedInUserId, setLoggedInUserId] = useState("");
  useEffect(() => {
    const fetchIsLoggedIn = async () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setLoggedInUserId(user.uid);
        } else {
          setLoggedInUserId("");
        }
      });
    };
    fetchIsLoggedIn();
  }, [loggedInUserId]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {loggedInUserId === "" && (
        <Grid container direction="column" justifyContent="center">
          <Typography
            component="div"
            align="center"
            style={{ height: "100vh" }}
          >
            <ToolbarAndChips />
            &nbsp;
            <Grid
              container
              spacing={2}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Typography variant="h5">
                Please log in to view awesome K events! :)
              </Typography>
            </Grid>
          </Typography>
        </Grid>
      )}
      {loggedInUserId !== "" && (
        <Grid container direction="column" justifyContent="center">
          <Typography
            component="div"
            align="center"
            style={{ height: "100vh" }}
          >
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
      )}
    </div>
  );
};
