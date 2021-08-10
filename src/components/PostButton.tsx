import React from "react";
import Box from "@material-ui/core/Box";
import {
  Typography,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import firebase from "firebase";
import { useRef } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  fabicon: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  },
  locationField: {
    minWidth: 150,
    maxWidth: 450,
  },
  eventBox: {
    minWidth: 200,
    maxWidth: 500,
  },
  textfield: {
    width: 200,
  },
}));

export const PostButton = () => {
  const classes = useStyles();
  const [events, setEventType] = React.useState("");
  const eventNameField = useRef<HTMLInputElement>(null);
  const eventTypeField = useRef<HTMLInputElement>(null);
  const eventTimeField = useRef<HTMLInputElement>(null);
  const eventLocationField = useRef<HTMLInputElement>(null);
  const handleDropDownChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setEventType(event.target.value as string);
  };
  // function addNewEvent() {
  //   const databaseRef = firebase.database().ref().push();
  //   const key = databaseRef.key();
  //   var newEvent = {
  //     eventID: key,
  //     eventName: eventNameField.current!.value,
  //     eventTime: eventTimeField.current!.value,
  //     eventLocation: eventLocationField.current!.value,
  //     eventType: eventTypeField.current!.value,
  //   };
  //   databaseRef.push(newEvent)
  // }

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Fab
            color="secondary"
            variant="extended"
            className={classes.fabicon}
            {...bindTrigger(popupState)}
          >
            <AddIcon />
            New Event
          </Fab>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box p={2} className={classes.eventBox}>
              <Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h6">Create Event</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      className={classes.textfield}
                      label="Event Name"
                      inputRef={eventNameField}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel>Select Event Types</InputLabel>
                      <Select
                        value={events}
                        onChange={handleDropDownChange}
                        label="Age"
                        inputRef={eventTypeField}
                      >
                        <MenuItem value={10}>Campus Event</MenuItem>
                        <MenuItem value={20}>Study Sesh</MenuItem>
                        <MenuItem value={30}>House Party</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs>
                    <form noValidate>
                      <TextField
                        id="datetime-local"
                        label="Event Date and Time"
                        type="datetime-local"
                        defaultValue=""
                        inputRef={eventTimeField}
                        className={classes.dateAndTime}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </form>
                  </Grid>
                  <Grid item xs>
                    <TextField
                      variant="outlined"
                      className={classes.textfield}
                      label="Event Location"
                      inputRef={eventLocationField}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <Button color="secondary" variant="contained">
                      Post
                    </Button>
                  </Grid>
                </Grid>
              </Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};
