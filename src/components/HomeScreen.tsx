import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { PostButton } from "./PostButton";
import { ToolbarAndChips } from "./ToolbarAndChips";
import { EventCardContainer } from "./EventCardContainer";
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
}));

export const HomeScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
    </div>
  );
};
