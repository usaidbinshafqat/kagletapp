import React from "react";
import { Typography, Card, CardMedia, Icon } from "@material-ui/core";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import CardHeader from "@material-ui/core/CardHeader";
import { createTheme } from "@material-ui/core/styles";
import partyImage1 from "../logos/partyImage1.png";
import campusImage1 from "../logos/campusImage1.png";
import studyImage1 from "../logos/studyImage1.png";
import studyImage2 from "../logos/studyImage2.png";
import campusImage2 from "../logos/campusImage2.png";
import partyImage2 from "../logos/partyImage2.png";

import LocalBarIcon from "@material-ui/icons/LocalBar";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import BackpackRoundedIcon from "@material-ui/icons/BackpackRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardcomponent: {
    width: "82%",
  },
  username: {
    textAlign: "left",
  },
  rightAlignText: {
    textAlign: "right",
    justifyContent: "center",
  },
  cardLooks: {
    borderRadius: 12,
  },
  cardTitle: {
    fontSize: 30,
    paddingLeft: 10,
  },
  cardSubtitle: {
    fontSize: 20,
    paddingLeft: 103,
  },
  media: {
    height: 170,
  },
  titleIcon: {
    paddingTop: 7,
    paddingLeft: 70,
  },
  locationSubtitle: {
    fontSize: 23,
    paddingLeft: 10,
  },
  locationSubtitleIcon: {
    paddingLeft: 70,
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
export interface EventDetails {
  name: string;
  type?: string;
  location?: string;
  time?: string;
  email?: string;
}

function randomGenerator() {
  const min = 0;
  const max = 1;
  const random = min + Math.random() * (max - min);

  return random;
}

function chooseImage(type?: string) {
  let imageName = "";
  let random = Math.round(randomGenerator());
  console.log(Math.round(random));
  if (type === "Study Sesh") {
    if (random === 0) {
      imageName = studyImage1;
    } else {
      imageName = studyImage2;
    }
  }
  if (type === "House Party") {
    if (random === 0) {
      imageName = partyImage1;
    } else {
      imageName = partyImage2;
    }
  }
  if (type === "Campus Event") {
    if (random === 0) {
      imageName = campusImage1;
    } else {
      imageName = campusImage2;
    }
  }

  return imageName;
}

function chooseIcon(type?: string) {
  let typeIcon: any = "";
  if (type === "Study Sesh") {
    typeIcon = <BackpackRoundedIcon />;
  }
  if (type === "House Party") {
    typeIcon = <LocalBarIcon />;
  }
  if (type === "Campus Event") {
    typeIcon = <SchoolRoundedIcon />;
  }
  return typeIcon;
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
        <MuiThemeProvider theme={theme}>
          <CardMedia
            className={classes.media}
            image={chooseImage(props.type)}
            title="Test"
          />
        </MuiThemeProvider>
        {/* card content (the white part),  */}
        <CardContent>
          <Grid
            container
            direction="row-reverse"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item className={`${classes.cardTitle} ${"heading"}`}>
              {props.name}
            </Grid>
            <Grid item className={classes.titleIcon}>
              {chooseIcon(props.type)}
            </Grid>
          </Grid>

          {/* <span>&nbsp;</span> */}
          <Grid
            container
            direction="row-reverse"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid
              item
              className={`${classes.locationSubtitle} ${"subheading"}`}
            >
              {props.location}
            </Grid>
            <LocationOnOutlinedIcon className={classes.locationSubtitleIcon} />
          </Grid>
          <Grid
            container
            direction="row-reverse"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item className={`${classes.cardSubtitle} ${"subheading"}`}>
              {props.time}
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
