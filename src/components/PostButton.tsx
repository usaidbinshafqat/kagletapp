import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import {
  Typography,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import firebase from "firebase";
import DateFnsUtils from "@date-io/date-fns";
import { IconButton, InputAdornment } from "@material-ui/core";
import EventRoundedIcon from "@material-ui/icons/EventRounded";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";

import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import Icon from "@material-ui/core/Icon";
import { useDebugValue } from "react";
import { createTheme } from "@material-ui/core/styles";

export interface EventDetails {
  name: string;
  type?: string;
  location?: string;
  time?: string;
  email?: string;
  submitDisabled?: boolean;
  textValid?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  popoverFab: {
    padding: theme.spacing(2),
  },
  /*
  formControl: {
    minWidth: 150,
    maxWidth: 450,
  },
  */
  formControl: {
    margin: theme.spacing(1),
    minWidth: 270,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
  const [submitDisabled, setSubmitDisabled] = React.useState(true);
  const [textValid, setTextValid] = React.useState(false);
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
    checkValidity();
  };
  const handleEventNameInput = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setEventName(event.target.value as string);
    checkValidity();
  };

  //delete key check
  const handleKeyPress = () => {
    checkValidity();
  };

  const handleEventNameInput1 = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    if (eventName == "") {
      setEventName(event.target.value as string);
      checkValidity();
    }
  };

  const handleEventLocationInput = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setEventLocation(event.target.value as string);
    checkValidity();
  };

  const handleEventTime = (date: Date | null) => {
    setEventTime(date);
    checkValidity();
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

  function checkValidity() {
    if (
      eventName != "" &&
      eventLocation != "" &&
      eventType != "" &&
      eventTime != null
    ) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }

  function refreshPage() {
    window.location.reload();
  }

  function postButton() {
    Push();
    refreshPage();
  }

  function handleValidation(this: any) {
    const { eventName, eventLocation, eventType, eventTime } = this.state;
    let error = "";
    let formIsValid = true;
    if (!eventName || !eventLocation || !eventType || !eventTime) {
      formIsValid = false;
      error = "Input fields cannot be empty";
    }

    this.setState({ error: error });
    return formIsValid;
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          {/* Floating action button in the bottom right corner, the styles are defined in useStyles */}
          <ThemeProvider theme={theme}>
            <Fab
              color="primary"
              variant="extended"
              className={classes.fabicon}
              {...bindTrigger(popupState)}
            >
              <AddIcon />
              New Event
            </Fab>
          </ThemeProvider>
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
            <ThemeProvider theme={theme}>
              <Box p={2} className={classes.eventBox}>
                <Typography>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Typography variant="h6">Create Event</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>
                        <FormControl>
                          <TextField
                            color="secondary"
                            variant="outlined"
                            className={classes.textfield}
                            label="Event Name"
                            onKeyPress={handleKeyPress}
                            onChange={handleEventNameInput}
                            required
                          ></TextField>
                        </FormControl>
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography>
                        <TextField
                          color="secondary"
                          required
                          variant="outlined"
                          className={classes.textfield}
                          label="Event Location"
                          onKeyPress={handleKeyPress}
                          onChange={handleEventLocationInput}
                        ></TextField>
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography>
                        <FormControl
                          color="secondary"
                          variant="outlined"
                          className={classes.formControl}
                          required
                        >
                          <InputLabel>Select Event Types</InputLabel>
                          <Select
                            color="secondary"
                            value={eventType}
                            onChange={handleDropDownChange}
                            label="Event Type"
                            autoWidth
                          >
                            <MenuItem color="secondary" value={"Campus Event"}>
                              Campus Event
                            </MenuItem>
                            <MenuItem color="secondary" value={"Study Sesh"}>
                              Study Sesh
                            </MenuItem>
                            <MenuItem color="secondary" value={"House Party"}>
                              House Party
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <DateTimePicker
                            required
                            color="secondary"
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
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        onClick={postButton}
                        color="secondary"
                        variant="contained"
                        endIcon={<Icon>send</Icon>}
                        disabled={submitDisabled}
                      >
                        Post
                      </Button>
                    </Grid>
                  </Grid>
                </Typography>
              </Box>
            </ThemeProvider>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};
