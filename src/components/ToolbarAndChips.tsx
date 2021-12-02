import {
  Typography,
  AppBar,
  Box,
  Popover,
  Button,
  Avatar,
  MenuItem,
  Paper,
} from "@material-ui/core";
import { Icon } from "@iconify/react";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import logo from "../logos/favicon.png";
import logoText from "../logos/HomeHeader.png";
import PopupState, { bindPopover } from "material-ui-popup-state";
import { bindTrigger } from "material-ui-popup-state/hooks";
import React from "react";
import { auth } from "../firebaseSetup";
import { createTheme } from "@material-ui/core/styles";
import { SignedInUserEmail } from "./signedInUserEmail";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import { Link, Menu, styled } from "@mui/material";
import {
  BugReportRounded,
  HelpOutlineRounded,
  LocalBar,
} from "@material-ui/icons";
import Stack from "@mui/material/Stack";

import LocalBarIcon from "@material-ui/icons/LocalBar";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import BackpackRoundedIcon from "@material-ui/icons/BackpackRounded";
import Slide from "@mui/material/Slide";
// import { Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    alignContent: "center",
    alignItems: "flex-start",
    justify: "center",
    borderRadius: 20,
    borderColor: "#becddc",
    alignSelf: "center",
    textTransform: "none",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    backgroundColor: "#ffffff",
  },
  secondToolobar: {
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
    height: "3%",
    width: "3%",
    minHeight: 28,
    minWidth: 28,
    maxHeight: 42,
    maxWidth: 42,
    paddingBlock: 2,
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
    maxWidth: 450,
  },
  dateAndTime: {
    marginLeft: theme.spacing(1),
    minWidth: 150,
    maxWidth: 450,
  },
  locationField: {
    minWidth: 150,
    maxWidth: 450,
  },
  eventBox: {
    minWidth: 200,
    maxWidth: 500,
  },
  iconText: {
    color: "#543B31",
    fontSize: 25,
    paddingLeft: 1,
  },
  logoButton: {
    maxHeight: 45,
    maxWidth: 45,
  },
  logoText: {
    maxHeight: 40,
    maxWidth: 90,
    minHeight: 30,
    minWidth: 66,
    paddingTop: 5,
  },
  linkButton: {
    textTransform: "none",
  },
  chips: {
    maxWidth: "125rem",
    maxHeight: "400rem",
    minWidth: "10rem",
    minHeight: "32rem",
  },
  buttonChips: {
    textTransform: "none",
    borderRadius: 60,
    height: 160,
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ToolbarAndChips = () => {
  const classes = useStyles();
  //this will be called later.

  //code to deal with opening links "dropdown"
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //end dropdown code

  //signout function
  function signOut() {
    auth
      .signOut()
      .then(() => {
        refreshPage();
      })
      .catch((error) => {
        console.log("error logging in", error);
      });
  }

  //refreshes page after logging out so user cannot access stuff after logging out
  function refreshPage() {
    window.location.reload();
  }

  //to be implented later: chips with event types

  // const [flag1, setFlag1] = React.useState(true);
  // const [flag2, setFlag2] = React.useState(true);
  // const [flag3, setFlag3] = React.useState(true);
  // const handleClickCampus = () => {
  //   setFlag1(!flag1);
  // };
  // const handleClickStudy = () => {
  //   setFlag2(!flag2);
  // };
  // const handleClickParty = () => {
  //   setFlag3(!flag3);
  // };
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

  return (
    <AppBar
      position="static"
      elevation={0}
      style={{ margin: 0, width: "100%" }}
    >
      <Toolbar className={classes.toolbar}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Grid
              container
              spacing={0}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <IconButton className={classes.logoButton} onClick={refreshPage}>
                <Avatar className={classes.appicon} src={logo} />
              </IconButton>
              <img src={logoText} className={classes.logoText} alt="logoText" />
            </Grid>
          </Grid>
          <Grid item>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    {...bindTrigger(popupState)}
                  >
                    <AccountCircle
                      className={classes.accountIcon}
                    ></AccountCircle>
                  </IconButton>

                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <Box p={2}>
                      <Typography>
                        <ThemeProvider theme={theme}>
                          {/* Here comes the first name extracted from the email */}
                          <SignedInUserEmail></SignedInUserEmail>
                          <Box m={6} pt={1}></Box>
                          <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Button
                              variant="outlined"
                              color="primary"
                              onClick={signOut}
                              className={classes.button}
                              startIcon={<MeetingRoomRoundedIcon />}
                            >
                              Logout
                            </Button>
                          </Grid>
                          <Box m={1} pt={0}></Box>
                          <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Grid item>
                              <Button
                                id="basic-button"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleClick}
                                className={classes.linkButton}
                              >
                                Feedback
                              </Button>

                              <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                  "aria-labelledby": "basic-button",
                                }}
                              >
                                <Link
                                  href="mailto:suggestions@kaglet.app"
                                  color="#555555"
                                  underline="none"
                                >
                                  <MenuItem>
                                    <Box m={0.5} pt={1}>
                                      <BugReportRounded fontSize="small" />
                                    </Box>
                                    Bugs or Suggestions?
                                  </MenuItem>
                                </Link>
                                <Link
                                  href="mailto:help@kaglet.app"
                                  color="#555555"
                                  underline="none"
                                >
                                  <MenuItem>
                                    <Box m={0.5} pt={1}>
                                      <HelpOutlineRounded fontSize="small" />
                                    </Box>
                                    Need help?
                                  </MenuItem>
                                </Link>

                                <Link
                                  href="https://discord.link/KzooKaglet"
                                  color="#555555"
                                  underline="none"
                                >
                                  <MenuItem>
                                    <Box m={0.5} pt={1}>
                                      <Icon icon="akar-icons:discord-fill" />
                                    </Box>
                                    Join Our Discord!
                                  </MenuItem>
                                </Link>
                              </Menu>
                            </Grid>
                            {/* <Grid item>&ensp;&middot;&ensp;</Grid>
                            <Grid item>
                              <Link
                                href="https://usaidbinshafqat.com/"
                                color="#555555"
                              >
                                About Us
                              </Link>
                            </Grid> */}
                          </Grid>
                        </ThemeProvider>
                      </Typography>
                    </Box>
                  </Popover>
                </div>
              )}
            </PopupState>
          </Grid>
        </Grid>
      </Toolbar>

      {/* <Toolbar className={classes.secondToolobar}> */}
      {/* <Grid container spacing={1}> */}
      {/* <Grid item>
            <Chip
              onClick={handleClickCampus}
              label="Campus Events"
              clickable
              color="secondary"
              variant={flag1 ? "outlined" : "default"}
              icon={<SchoolRoundedIcon />}
              className={classes.chips}
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
          </Grid> */}
      {/* <Grid container spacing={3}>
          <Grid item>
            <Button variant="outlined" className={classes.buttonChips}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <BackpackRoundedIcon />
                </Grid>
                <Grid item>Study Seshes</Grid>
              </Grid>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" className={classes.buttonChips}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <LocalBarIcon />
                </Grid>
                <Grid item>House Parties</Grid>
              </Grid>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" className={classes.buttonChips}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <SchoolRoundedIcon />{" "}
                </Grid>
                <Grid item>Campus Events</Grid>
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </Toolbar> */}
    </AppBar>
  );
};
