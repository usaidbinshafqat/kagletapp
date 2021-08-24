import React, { useEffect, useState } from "react";
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
import Timestamp from "firebase";
import DateFnsUtils from "@date-io/date-fns";
import { IconButton, InputAdornment } from "@material-ui/core";
import EventRoundedIcon from "@material-ui/icons/EventRounded";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  DateTimePicker,
} from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

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

  // Get user's email address
  const [loggedInUserEmail, setLoggedInUserEmail] = useState("");
  useEffect(() => {
    const fetchIsLoggedIn = async () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setLoggedInUserEmail(user.email!);
        } else {
          setLoggedInUserEmail("");
        }
      });
    };
    fetchIsLoggedIn();
  }, [loggedInUserEmail]);

  //pushing into Firebase
  var database = firebase.database();
  const [eventName, setEventName] = React.useState("");
  const [eventLocation, setEventLocation] = React.useState("");
  const [eventType, setEventType] = React.useState("");
  const [eventTime, setEventTime] = React.useState<Date | null>(new Date());
  const Push = () => {
    database
      .ref("events")
      .push({
        eventName: eventName,
        eventLocation: eventLocation,
        eventType: eventType,
        eventTime: eventTime?.getTime(),
        hostEmail: loggedInUserEmail,
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

  const handleEventTime = (date: Date | null) => {
    setEventTime(date);
  };

  function refreshPage() {
    window.location.reload();
  }

  function postButton() {
    Push();
    refreshPage();
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          {/* Floating action button in the bottom right corner, the styles are defined in useStyles */}
          <Fab
            color="secondary"
            variant="extended"
            className={classes.fabicon}
            {...bindTrigger(popupState)}
          >
            <AddIcon />
            New Event
          </Fab>
          {/* Opens popover, the rest inside is self explanatory */}
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
            {/* Box that shows up when button is clicked, all following tags are self explanatory*/}
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
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <DateTimePicker
                        label="Event Time"
                        inputVariant="outlined"
                        className={classes.dateAndTime}
                        value={eventTime}
                        onChange={handleEventTime}
                        onError={console.log}
                        disablePast
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton>
                                <EventRoundedIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </MuiPickersUtilsProvider>
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
                      onClick={postButton}
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
