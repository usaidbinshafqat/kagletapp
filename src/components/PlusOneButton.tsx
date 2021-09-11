import { Button, SnackbarOrigin, Typography } from "@material-ui/core";
import firebase from "firebase";
import React, { useState, KeyboardEvent, KeyboardEventHandler } from "react";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

export interface RsvpDetails {
  eventID?: string;
  rsvpList?: any;
}

const database = firebase.database();

export interface State extends SnackbarOrigin {
  open: boolean;
}

function UIDarray(eventID?: string, rsvpList?: any) {
  console.log(eventID);
  const auth = firebase.auth();
  const user = auth.currentUser;
  console.log(typeof rsvpList);

  if (user) {
    if (!rsvpList.includes(user.uid)) {
      rsvpList.push(user.uid);
      PushFirebase(rsvpList, eventID);
    } else {
      // snackbar shows up saying you're already going
      // to the event, add to calendar here
      console.log("Nah");
    }
  }
}

function PushFirebase(rsvpList?: any, eventID?: string) {
  database.ref("events/" + eventID + "/").update({
    rsvpList: rsvpList,
  });
}

export const PlusOneButton: React.FC<RsvpDetails> = (props: RsvpDetails) => {
  return (
    <Button
      onClick={() => {
        UIDarray(props.eventID, props.rsvpList);
      }}
    >
      RSVP
    </Button>
  );
};
