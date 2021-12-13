import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  NoSsr,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
// import { createTheme } from "@material-ui/core/styles";
import partyImage1 from "../logos/partyImage1.png";
import campusImage1 from "../logos/campusImage1.png";
import studyImage1 from "../logos/studyImage1.png";
import studyImage2 from "../logos/studyImage2.png";
import studyImage3 from "../logos/studyImage3.png";
import campusImage2 from "../logos/campusImage2.png";
import campusImage3 from "../logos/campusImage3.png";
import partyImage2 from "../logos/partyImage2.png";
import partyImage3 from "../logos/partyImage3.png";
// import LocalBarIcon from "@material-ui/icons/LocalBar";
// import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
// import BackpackRoundedIcon from "@material-ui/icons/BackpackRounded";
import { Row } from "@mui-treasury/components/flex";
import { PlusOneButton } from "./PlusOneButton";
import { Info, InfoSubtitle, InfoTitle } from "@mui-treasury/components/info";
import { useNewsInfoStyles } from "@mui-treasury/styles/info/news";
import GoogleFontLoader from "react-google-font-loader";
import { IconButton, IconButtonProps } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MailIcon from "@mui/icons-material/Mail";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import AddToCalendar from "react-add-to-calendar";
import { google, outlook, office365, yahoo, ics } from "calendar-link";
import moment from "moment";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";

const useStyles = makeStyles((theme) => ({
  cardcomponent: {
    minWidth: 300,
    position: "relative",
    boxShadow: "0 8px 24px 0 rgba(0,0,0,0.12)",
    overflow: "visible",
    borderRadius: "1.5rem",
    transition: "0.4s",
    "&:hover": {
      transform: "translateY(-10px)",
      "& $shadow": {
        bottom: "-1.5rem",
      },
      "& $shadow2": {
        bottom: "-2.5rem",
      },
    },
    "&:before": {
      content: '""',
      position: "absolute",
      zIndex: 0,
      display: "block",
      width: "100%",
      bottom: -1,
      height: "100%",
      borderRadius: "1.5rem",
      backgroundColor: "rgba(0,0,0,0)",
    },
  },
  username: {
    textAlign: "left",
  },
  leftAlignText: {
    textAlign: "left",
    justifyContent: "center",
    paddingLeft: 10,
  },
  cardLooks: {
    borderRadius: 12,
  },
  cardTitle: {
    //fontSize: 20,
    paddingLeft: 10,
  },
  cardSubtitle: {
    //fontSize: 17,
    paddingLeft: 5,
  },
  media: {
    minHeight: 220,
  },
  titleIcon: {
    paddingTop: 7,
  },
  locationSubtitle: {
    paddingLeft: 10,
  },
  join: {
    background: "linear-gradient(to top, #638ef0, #82e7fe)",
    "& > *": {
      textTransform: "none !important",
    },
  },
  main: {
    textAlign: "left",
    justifyContent: "center",
    paddingLeft: "10",
    overflow: "hidden",
    borderTopLeftRadius: "1.5rem",
    borderTopRightRadius: "1.5rem",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      display: "block",
      width: "100%",
      height: "100%",
      background: "linear-gradient(to top, #543b31, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 1,
    padding: "1.5rem 1.5rem 1rem",
  },
  tag: {
    display: "inline-block",
    fontFamily: "'Sen', sans-serif",
    backgroundColor: "#ff5dac",
    borderRadius: "0.5rem",
    padding: "2px 0.5rem",
    color: "#fff",
    marginBottom: "0.5rem",
  },
  title: {
    fontFamily: "'Nunito', 'sans-serif'",
    fontSize: "1.3rem",
    fontWeight: 800,
    color: "#fff",
  },
  author: {
    textAlign: "left",
    position: "relative",
    borderBottomLeftRadius: "1.5rem",
    borderBottomRightRadius: "1.5rem",
  },

  avatar: {
    width: 48,
    height: 48,
  },
  timeText: {
    paddingLeft: 6,
    fontFamily: "'Nunito', 'sans-serif'",
    textAlign: "left",
    fontSize: "1.3rem",
  },
  divDeets: {
    width: "90%",
  },
  textIcon: {
    color: "#EE6C4D",
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
  rsvpList?: any;
  eventID?: string;
}

function randomGenerator() {
  const min = 0;
  const max = 2;
  const random = min + Math.random() * (max - min);

  return random;
}

function chooseImage(type?: string) {
  let imageName = "";
  let random = Math.round(randomGenerator());
  if (type === "Study Sesh") {
    if (random === 0) {
      imageName = studyImage1;
    } else if (random === 1) {
      imageName = studyImage2;
    } else {
      imageName = studyImage3;
    }
  }
  if (type === "House Party") {
    if (random === 0) {
      imageName = partyImage1;
    } else if (random === 1) {
      imageName = partyImage2;
    } else {
      imageName = partyImage3;
    }
  }
  if (type === "Campus Event") {
    if (random === 0) {
      imageName = campusImage1;
    } else if (random === 1) {
      imageName = campusImage2;
    } else {
      imageName = campusImage3;
    }
  }
  console.log(imageName);
  return imageName;
}

// function chooseIcon(type?: string) {
//   let typeIcon: any = "";
//   if (type === "Study Sesh") {
//     typeIcon = <BackpackRoundedIcon />;
//   }
//   if (type === "House Party") {
//     typeIcon = <LocalBarIcon />;
//   }
//   if (type === "Campus Event") {
//     typeIcon = <SchoolRoundedIcon />;
//   }
//   return typeIcon;
// }

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const NewCardUI: React.FC<EventDetails> = (props: EventDetails) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const openInNewTab = () => {
    const mainUrl = "https://teams.microsoft.com/l/chat/0/0?users=";
    let emailUrl: any = props.email;
    //let emailUrl2:string = 'usaidbin.shafqat19@kzoo.edu'
    let fullUrl: string = mainUrl.concat(emailUrl);
    const newWindow = window.open(fullUrl, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const timeExtract = () => {
    let timeofEvent:any = props.time;
    timeofEvent.toString();
    let Time:any = ''
    let marker:boolean = false
    for (let i = 0; i < timeofEvent.length; i++) {
      if(marker == true){Time = Time + (timeofEvent[i]);}
      if(timeofEvent[i] == ','){marker = true}
    }
    return (Time)
  }
  const { google, outlook, office365, yahoo, ics } = require("calendar-link");
  const addToCalendar = () => {
    const eventCal = {
      title: props.name,
      //description: props.description,
      location: props.location,
      start: props.time,
      //start: moment(props.time).format(),
      duration: [1, "hour"],
    };
    const newWindow = window.open(google(eventCal), "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
    console.log((google(eventCal)))
    console.log(props.time)
    console.log(moment(props.time).format())
    
  };

  const nameExtract = () => {
    let nameOfPerson:any = props.email;
    nameOfPerson.toString();
    let Name:any = ''
    let fName:any = ''
    let lName:any = ''
    let point:any = 0;

    for (let i = 0; i < nameOfPerson.length; i++) {
      if(nameOfPerson[i] == '.'){break}
      fName = fName + (nameOfPerson[i]);
      point++;
    }
    fName = fName[0].toUpperCase() + fName.substring(1)
    Name = fName + (' ')
    for (let i = (point+1); i < nameOfPerson.length; i++) {
      if(nameOfPerson[i] == '@'){break}
      if (Number(nameOfPerson[i]) == 1){break}
      if (Number(nameOfPerson[i]) == 2){break}
      lName = lName + (nameOfPerson[i]);
    }
    lName = lName.charAt(0).toUpperCase() + lName.substring(1)
    Name = Name + lName
    return (fName);
  }

  return (
    // holding the cards in this div, using useStyles from up top
    <div className={classes.divDeets}>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: "Nunito", weights: [400, 800] }]} />
      </NoSsr>
      <Card className={classes.cardcomponent}>
        <Box className={classes.main} minHeight={220} position={"relative"}>
          <CardMedia
            className={classes.media}
            image={chooseImage(props.type)}
          />
          <div className={classes.content}>
            <div className={classes.tag}>{props.time}</div>
            <Typography className={classes.title}>
              {props.name} @ {props.location}
            </Typography>
          </div>
        </Box>
        <Row
          className={classes.author}
          m={0}
          p={1}
          pt={2}
          gap={2}
          bgcolor={"common.white"}
        >
          <Info position={"left"} useStyles={useNewsInfoStyles}>
            <InfoTitle className={classes.timeText}>
              <PlusOneButton
                eventID={props.eventID}
                rsvpList={props.rsvpList}
              />
            </InfoTitle>
          </Info>
          <Info position={"right"} useStyles={useNewsInfoStyles}>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Info>
        </Row>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent style={{ textAlign: "left" }}>
            <Row
              className={classes.author}
              m={0}
              p={1}
              pt={2}
              gap={2}
              bgcolor={"common.white"}
            >
              <Info position={"left"} useStyles={useNewsInfoStyles}>
                <InfoSubtitle style={{ paddingTop: 10, paddingLeft: 3 }}>
                  {/* {props.type} created by {props.email} */}
                  {props.type} created by {nameExtract()}
                </InfoSubtitle>
              </Info>

              <Info position={"right"} useStyles={useNewsInfoStyles}>
                <IconButton
                  size="small"
                  className={classes.textIcon}
                  onClick={() => openInNewTab()}
                >
                  <MessageTwoToneIcon className={classes.textIcon} />
                </IconButton>
                {/* <IconButton size="small"
                color="primary"
                onClick = {
                  () => addToCalendar()
                }>
                <CalendarTodayTwoToneIcon />
              </IconButton> */}
              </Info>
            </Row>
          </CardContent>
        </Collapse>
      </Card>
      &nbsp;
    </div>
  );
};
