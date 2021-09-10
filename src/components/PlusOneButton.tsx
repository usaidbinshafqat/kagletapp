import { Button } from "@material-ui/core";
import firebase from "firebase";

export interface EventDetails {
  email?: string;
  rsvpCount?: string;
}

// function AddOne(currentNumber: number) {
//   currentNumber = currentNumber + 1;
//   return currentNumber
// }
const database = firebase.database();

var array: any[];
function UIDarray() {
  const auth = firebase.auth();
  const user = auth.currentUser;
  if (user) {
    if (!array.includes(user.uid)) {
      array.push(user.uid);
      console.log(user.uid);
      database.ref("events/").set({
        rsvp: array,
      });
      //put in ref to event ID
    }
  } else {
    // snackbar shows up saying you're already going
    // to the event, add to calendar here
    console.log("Nah");
  }
}

const PushFirebase = () => {
  database.ref("events").push({
    rsvpCount: array,
  });
};

// const getCount = () => {
// }

export const PlusOneButton = () => {
  return <Button onClick={UIDarray}>RSVP</Button>;
};
