import { Typography } from "@material-ui/core";
import firebase from "firebase";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import React from "react";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    alignContent: "center",
    alignItems: "flex-start",
    justify: "center",
    borderRadius: 20,
    textTransform: "none",
  },
  rsvpCount: {
    paddingBottom: 7,
    paddingLeft: 10,
  },
}));

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#EE6C4D",
//       light: "#ff9b79",
//       dark: "#b53a22",
//     },
//     secondary: {
//       main: "#4C5760",
//       light: "#78848d",
//       dark: "#242e36",
//     },
//   },
// });

export interface RsvpDetails {
  eventID?: string;
  rsvpList?: any;
}

const database = firebase.database();

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
let check = false;

function UIDarray(eventID?: string, rsvpList?: any) {
  const auth = firebase.auth();
  const user = auth.currentUser;

  if (user) {
    if (!rsvpList.includes(user.email)) {
      rsvpList.push(user.email);
      PushFirebase(rsvpList, eventID);
    } else {
      //setCheck(true);
      check = true;
      // snackbar shows up saying you're already going
      // to the event, add to calendar here
    }
  }
}

function PushFirebase(rsvpList?: any, eventID?: string) {
  database.ref("events/" + eventID + "/").update({
    rsvpList: rsvpList,
  });
}

export const PlusOneButton: React.FC<RsvpDetails> = (props: RsvpDetails) => {
  const classes = useStyles();
  const [submitDisabled, setSubmitDisabled] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const handleClickSuccess = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = (
    event?: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
  };

  const handleClickError = () => {
    setOpenError(true);
  };

  const handleCloseError = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#EE6C4D",
  //       light: "#ff9b79",
  //       dark: "#b53a22",
  //     },
  //     secondary: {
  //       main: "#4C5760",
  //       light: "#78848d",
  //       dark: "#242e36",
  //     },
  //   },
  // });

  function handleDisable() {
    setSubmitDisabled(true);
  }

  function validity() {
    UIDarray(props.eventID, props.rsvpList);
    if (check === false) {
      handleClickSuccess();
      handleDisable();
      incrementCount();
    } else {
      handleClickError();
      handleDisable();
    }
  }

  const [count, setCount] = React.useState(props.rsvpList.length);

  function incrementCount() {
    setCount(count + 1);
  }

  function randomGeneratortexts() {
    const min = 0;
    const max = 7;
    const random = min + Math.random() * (max - min);
  
    return random;
  }

  function chooseText() {
    let text = "";
    let random = Math.round(randomGeneratortexts());
    if (random === 0) {
      text = "I'll attend!😁";
    } else if (random === 1) {
      text = "I'm coming!😁";
    } else if (random === 2) {
      text = "I will be coming!😁";
    } else if (random === 3) {
      text = "I'm down!";
    } else if (random === 4) {
      text = "Sign me up!";
    } else if (random === 5) {
      text = "I'm up for it!";
    } else if (random === 6) {
      text = "RSVP";
    } else if (random === 7) {
      text = "I'll be there!";
    }
    
    console.log(text);
    return text;
  }

  const buttons = (
    <Button
      disabled={submitDisabled}
      size="large"
      color="primary"
      variant="outlined"
      className={classes.button}
      onClick={() => {
        validity();
      }}
    >
      {chooseText()}
    </Button>
  );

  return (
    <div>
      {/* <Column>
        <Row p={2} gap={2} position={"middle-right"}>
          <Item>{buttons}</Item>
        </Row>
      </Column> */}
      {buttons}
      <Typography component="div" align="center">
        <div>
          <Snackbar
            autoHideDuration={2000}
            open={openSuccess}
            onClose={handleCloseSuccess}
          >
            <Alert onClose={handleCloseSuccess} severity="success">
              You're on the list! 👍
            </Alert>
          </Snackbar>

          <Snackbar
            autoHideDuration={2000}
            open={openError}
            onClose={handleCloseError}
          >
            <Alert onClose={handleCloseError} severity="error">
              You're already on the list! 😁
            </Alert>
          </Snackbar>
        </div>
      </Typography>
    </div>
  );
};
