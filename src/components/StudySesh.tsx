import React from "react";
import Box from "@material-ui/core/Box";
import {
  Typography,
  Card,
  AppBar,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import logo from "../logos/favicon.png";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import BackpackRoundedIcon from "@material-ui/icons/BackpackRounded";
import { Chip } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    color: "red",
    alignContent: "center",
    alignItems: "flex-start",
    justify: "center",
    marginTop: theme.spacing(3),
    borderRadius: 20,
    padding: "0.25rem 2rem",
    borderColor: "#becddc",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    backgroundColor: "#ffffff",
  },
  title: {
    flexGrow: 1,
    color: "#000000",
  },
  subtitle: {
    flexGrow: 1,
    alignSelf: "flex-end",
    color: "#000000",
  },
  textfield: {
    width: 200,
  },
  extendedIcon: {
    marginRight: theme.spacing(2),
  },
  cardcomponent: {
    width: "90%",
  },
  cardTitle: {
    flexGrow: 1,
    color: "#000000",
    paddingLeft: theme.spacing(7),
  },
  cardpositions: {
    marginBottom: 12,
  },
  username: {
    textAlign: "left",
  },
  rightAlignText: {
    textAlign: "right",
  },
  accountIcon: {
    minHeight: 30,
    minWidth: 30,
    color: "black",
  },
  appicon: {
    height: "4%",
    width: "4%",
    minHeight: 30,
    minWidth: 30,
    paddingBlock: 5,
  },
  fabicon: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  },
  bottomNav: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  popoverFab: {
    padding: theme.spacing(2),
  },
  formControl: {
    minWidth: 150,
    maxWidth: 450
  },
  dateAndTime: {
    marginLeft: theme.spacing(1),
    minWidth: 150,
    maxWidth: 450
  },
  locationField: 
  {
    minWidth: 150,
    maxWidth: 450
  }, 
  eventBox: {
    minWidth: 200,
    maxWidth: 500
  }
}));

export const StudySesh = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  const [flag1, setFlag1] = React.useState(true);
  const [flag2, setFlag2] = React.useState(true);
  const [flag3, setFlag3] = React.useState(true);
  const handleClickCampus = () => {
    setFlag1(!flag1);
  };
  const handleClickStudy = () => {
    setFlag2(!flag2);
  };
  const handleClickParty = () => {
    setFlag3(!flag3);
  };
  const [events, setEventType] = React.useState("");
  const handleDropDownChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setEventType(event.target.value as string);
  };

  return (
    <div className={classes.root}>
      <Grid container direction="column" justifyContent="center">
        <Typography component="div" align="center" style={{ height: "100vh" }}>
          <AppBar position="sticky" elevation={0}>
            <Toolbar className={classes.toolbar}>
              <Grid
                container
                spacing={1}
                justifyContent="center"
                alignItems="center"
              >
                <img className={classes.appicon} src={logo} alt="Logo" />
                <Typography variant="h5" className={classes.title}>
                  Events Today
                </Typography>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                >
                  <AccountCircle className={classes.accountIcon} />
                </IconButton>
              </Grid>
            </Toolbar>

            <Toolbar className={classes.toolbar}>
              <Grid container spacing={1}>
                <Grid item>
                  <Chip
                    onClick={handleClickCampus}
                    label="Campus Events"
                    clickable
                    color="secondary"
                    variant={flag1 ? "outlined" : "default"}
                    icon={<SchoolRoundedIcon />}
                  />
                </Grid>

                <Grid item>
                  <Chip
                    onClick={handleClickStudy}
                    variant={flag2 ? "outlined" : "default"}
                    label="Study Seshes"
                    clickable
                    color="secondary"
                    icon={<BackpackRoundedIcon />}
                  />
                </Grid>

                <Grid item>
                  <Chip
                    onClick={handleClickParty}
                    variant={flag3 ? "outlined" : "default"}
                    label="House Parties"
                    clickable
                    color="secondary"
                    icon={<LocalBarIcon />}
                  />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          &nbsp;
          <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justify="center"
          >
            {/* card 1 */}
            <Card className={classes.cardcomponent} variant="outlined">
              <CardContent>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      className={classes.username}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Study Sesh
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} alignItems="flex-end">
                    <Typography className={classes.rightAlignText}>
                      HH:MM
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    direction="row-reverse"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <Typography className={classes.username}>
                      username
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className={classes.rightAlignText}>
                      <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                      Location
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            {/* card 2 */}
            &nbsp;
            <Card className={classes.cardcomponent} variant="outlined">
              <CardContent>
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    direction="row-reverse"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <Typography
                      className={classes.username}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Study Sesh
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className={classes.rightAlignText}>
                      HH:MM
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    direction="row-reverse"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <Typography className={classes.username}>
                      username
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className={classes.rightAlignText}>
                      <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                      Location
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            {/* card 3 */}
            &nbsp;
            <Card className={classes.cardcomponent} variant="outlined">
              <CardContent>
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    direction="row-reverse"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <Typography
                      className={classes.username}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Study Sesh
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className={classes.rightAlignText}>
                      HH:MM
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    direction="row-reverse"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <Typography className={classes.username}>
                      username
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className={classes.rightAlignText}>
                      <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                      Location
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            {/* card 4 */}
            &nbsp;
            <Card className={classes.cardcomponent} variant="outlined">
              <CardContent>
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    direction="row-reverse"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <Typography
                      className={classes.username}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Study Sesh
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className={classes.rightAlignText}>
                      HH:MM
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    direction="row-reverse"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <Typography className={classes.username}>
                      username
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className={classes.rightAlignText}>
                      <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                      Location
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            {/* card 5 */}
            &nbsp;
            <Card className={classes.cardcomponent} variant="outlined">
              <CardContent>
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    direction="row-reverse"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <Typography
                      className={classes.username}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Study Sesh
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className={classes.rightAlignText}>
                      HH:MM
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    direction="row-reverse"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <Typography className={classes.username}>
                      username
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className={classes.rightAlignText}>
                      <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                      Location
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            {/* card 6 */}
            &nbsp;
            <Card className={classes.cardcomponent} variant="outlined">
              <CardContent>
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    direction="row-reverse"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <Typography
                      className={classes.username}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Study Sesh
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className={classes.rightAlignText}>
                      HH:MM
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    direction="row-reverse"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <Typography className={classes.username}>
                      username
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className={classes.rightAlignText}>
                      <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                      Location
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
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
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
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
                            ></TextField>
                          </Grid>
                        </Grid>
                      </Typography>
                    </Box>
                  </Popover>
                </div>
              )}
            </PopupState>
          </Grid>
        </Typography>
      </Grid>
    </div>
  );
};

// {/*fabicon */}

// <Grid item className={classes.popoverFab}>
// <Fab
// aria-label="add" color="secondary"
// className={classes.fabicon}>
//   <AddIcon />

// </Fab>

// </Grid>
