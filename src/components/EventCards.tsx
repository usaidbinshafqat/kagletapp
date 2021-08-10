import React, { useEffect, useState } from "react";
import { Typography, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

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
  cardTitle: {
    flexGrow: 1,
    color: "#000000",
    paddingLeft: theme.spacing(7),
  },
  cardpositions: {
    marginBottom: 12,
  },
  username: {
    textAlign: "left",
  },
  rightAlignText: {
    textAlign: "right",
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
}));

export interface EventDetails {
  name: string;
  eventType?: string;
  location?: string;
  time?: string;
}

export const EventCards: React.FC<EventDetails> = (props: EventDetails) => {
  const classes = useStyles();

  // const [collegeEvents, setEvents] = useState(props);
  // useEffect(()=> { setEvents(collegeEvents)}, [collegeEvents])
  // const event = firebase.database().ref('events');
  // const eventNames = []
  // event.on('value', (snapshot) => {
  //   snapshot.forEach((childSnapshot) => {
  //     const event = childSnapshot.val();
  //     console.log(event.eventType);
  //     eventNames.push(event.name);
  //   });
  //   // console.log(data);
  // }, []);

  return (
    <div className={classes.cardcomponent}>
      <Card variant="outlined">
        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography
                className={classes.username}
                gutterBottom
                variant="h5"
                component="h2"
              >
                {props.name}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} alignItems="flex-end">
              <Typography className={classes.rightAlignText}>
                {props.time}
                {/* HH:MM */}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}
              direction="row-reverse"
              justifyContent="flex-end"
              alignItems="flex-start"
            >
              <Typography className={classes.username}>username</Typography>
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
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      &nbsp;
    </div>
  );
};
