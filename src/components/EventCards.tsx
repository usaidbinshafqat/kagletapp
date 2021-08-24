import React from "react";
import { Typography, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    color: "red",
    alignContent: "center",
    alignItems: "flex-start",
    justify: "center",
    marginTop: theme.spacing(3),
    borderRadius: 20,
    padding: "0.25rem 2rem",
    borderColor: "#becddc",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    backgroundColor: "#ffffff",
  },
  title: {
    flexGrow: 1,
    color: "#000000",
  },
  subtitle: {
    flexGrow: 1,
    alignSelf: "flex-end",
    color: "#000000",
  },
  textfield: {
    width: 200,
  },
  extendedIcon: {
    marginRight: theme.spacing(2),
  },
  cardcomponent: {
    width: "90%",
  },

  cardpositions: {
    marginBottom: 12,
  },
  username: {
    textAlign: "left",
  },
  rightAlignText: {
    textAlign: "right",
    justifyContent: "center",
  },
  accountIcon: {
    minHeight: 30,
    minWidth: 30,
    color: "black",
  },
  appicon: {
    height: "4%",
    width: "4%",
    minHeight: 30,
    minWidth: 30,
    paddingBlock: 5,
  },
  fabicon: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  },
  bottomNav: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  popoverFab: {
    padding: theme.spacing(2),
  },
  formControl: {
    minWidth: 150,
    maxWidth: 450,
  },
  dateAndTime: {
    marginLeft: theme.spacing(1),
    minWidth: 150,
    maxWidth: 450,
  },
  locationField: {
    minWidth: 150,
    maxWidth: 450,
  },
  eventBox: {
    minWidth: 200,
    maxWidth: 500,
  },
  cardLooks: {
    borderRadius: 12,
  },
  rsvpButton: {
    backgroundColor: "#ff8c1a",
    borderRadius: 12,
  },
  cardTitle: {
    flexGrow: 1,
    color: "#000000",
    textAlign: "left",
    backgroundColor: "#ff8c1a",
  },
}));

export interface EventDetails {
  name: string;
  type?: string;
  location?: string;
  time?: string;
  email?: string;
}

export const EventCards: React.FC<EventDetails> = (props: EventDetails) => {
  const classes = useStyles();

  return (
    // holding the cards in this div, using useStyles from up top
    <div className={classes.cardcomponent}>
      {/* card component for each card */}
      <Card variant="outlined" className={classes.cardLooks}>
        {/* 
        card header holds title (orange part) 
        gets data from firebase where it says props.xxx 
        "xxx" is defined in the interface before the export const EventCards
        */}
        <CardHeader
          className={classes.cardTitle}
          title={
            // a grid to hold name and time with good alignment
            <Grid container>
              <Grid item xs={12} sm={6}>
                {props.name}
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                alignItems="flex-end"
                className={classes.rightAlignText}
              >
                {props.time}
              </Grid>
            </Grid>
          }
        />
        {/* card content (the white part),  */}
        <CardContent>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}
              direction="row-reverse"
              justifyContent="flex-end"
              alignItems="flex-start"
            >
              <Typography className={classes.username}>{props.type}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography className={classes.rightAlignText}>
                <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                {props.location}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            {/* RSVP button, does not do anything yet so this is commented out. */}
            {/* <Button
              color="secondary"
              variant="contained"
              size="small"
              disableElevation
              className={classes.rsvpButton}
            >
              RSVP +1
            </Button> */}

            <Grid
              item
              xs={12}
              alignItems="flex-end"
              className={classes.rightAlignText}
            >
              <Typography>{props.email}</Typography>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      &nbsp;
    </div>
  );
};
