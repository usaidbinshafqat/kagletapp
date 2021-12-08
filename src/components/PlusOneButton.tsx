import { Grid, Typography } from "@material-ui/core";
import firebase from "firebase";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import React from "react";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { makeStyles, Theme, createTheme } from "@material-ui/core/styles";
import { Row, Item, Column } from "@mui-treasury/components/flex";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    alignContent: "center",
    alignItems: "flex-start",
    justify: "center",
    marginTop: theme.spacing(1.1),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(-1),
    borderRadius: 20,
    padding: "0.5rem 0.8rem",
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

  const buttons = (
    <Button
      disabled={submitDisabled}
      size="small"
      color="primary"
      variant="contained"
      onClick={() => {
        validity();
      }}
    >
      I'll join! 😁
    </Button>
  );

  return (
    <div>
      <Column>
        <Row p={2} gap={2} position={"middle-right"}>
          <Item>{buttons}</Item>
        </Row>
      </Column>

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
              You've already RSVP'd
            </Alert>
          </Snackbar>
        </div>
      </Typography>
    </div>
  );
};
