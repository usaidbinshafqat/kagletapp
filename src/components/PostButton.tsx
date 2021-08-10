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
import { useState } from "react";
import { Input } from "@material-ui/core";

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

  //pushing into Firebase
  var database = firebase.database();
  const [eventName, setEventName] = React.useState("");
  const [eventLocation, setEventLocation] = React.useState("");
  const [eventType, setEventType] = React.useState("");
  const [eventTime, setEventTime] = React.useState("");

  const Push = () => {
    database
      .ref("events")
      .push({
        eventName: eventName,
        eventLocation: eventLocation,
        eventType: eventType,
        eventTime: eventTime,
      })
      .catch(alert);
  };
  const handleDropDownChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setEventType(event.target.value as string);
  };
  const handleEventNameInput = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setEventName(event.target.value as string);
  };

  const handleEventLocationInput = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setEventLocation(event.target.value as string);
  };

  const handleEventTime = (event: React.ChangeEvent<{ value: unknown }>) => {
    setEventLocation(event.target.value as string);
  };

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
                      onChange={handleEventNameInput}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel>Select Event Types</InputLabel>
                      <Select
                        value={eventType}
                        onChange={handleDropDownChange}
                        label="Event Type"
                      >
                        <MenuItem value={"Campus Event"}>Campus Event</MenuItem>
                        <MenuItem value={"Study Sesh"}>Study Sesh</MenuItem>
                        <MenuItem value={"House Party"}>House Party</MenuItem>
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
                        className={classes.dateAndTime}
                        onChange={handleEventTime}
                        value={eventTime}
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
                      onChange={handleEventLocationInput}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      onClick={Push}
                      color="secondary"
                      variant="contained"
                    >
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
