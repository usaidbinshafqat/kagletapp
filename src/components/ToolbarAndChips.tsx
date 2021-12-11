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
import logo from "../logos/justLogo.png";
import logoText from "../logos/HomeHeader.png";
import PopupState, { bindPopover } from "material-ui-popup-state";
import { bindTrigger } from "material-ui-popup-state/hooks";
import React from "react";
import { auth } from "../firebaseSetup";
import { createTheme } from "@material-ui/core/styles";
import { SignedInUserEmail } from "./signedInUserEmail";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import { Link, Menu, styled } from "@mui/material";
import { BugReportRounded, HelpOutlineRounded } from "@material-ui/icons";
import { Info, InfoSubtitle, InfoTitle } from "@mui-treasury/components/info";

// import Stack from "@mui/material/Stack";

// import LocalBarIcon from "@material-ui/icons/LocalBar";
// import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
// import BackpackRoundedIcon from "@material-ui/icons/BackpackRounded";
// import Slide from "@mui/material/Slide";
// // import { Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    alignContent: "center",
    alignItems: "flex-start",
    justify: "center",
    borderRadius: 20,
    borderColor: "#becddc",
    alignSelf: "center",
    textTransform: "none",
    fontFamily: "'Sen', sans-serif",
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
  accountIcon: {
    minHeight: 30,
    minWidth: 30,
    color: "black",
  },
  appicon: {
    height: "4%",
    width: "4%",
    minHeight: 36,
    minWidth: 36,
    maxHeight: 56,
    maxWidth: 56,
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
  logoButton: {
    maxHeight: 45,
    maxWidth: 45,
  },
  logoText: {
    maxHeight: 43,
    maxWidth: 95,
    minHeight: 32,
    minWidth: 71,
    paddingTop: 5,
  },
  linkButton: {
    textTransform: "none",
    fontFamily: "'Sen', sans-serif",
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
      position="sticky"
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
                    style={{ borderRadius: "5rem" }}
                  >
                    <Box p={1} style={{ borderRadius: "1.5rem" }}>
                      <Typography style={{ borderRadius: "1.5rem" }}>
                        <ThemeProvider theme={theme}>
                          {/* Here comes the first name extracted from the email */}
                          <InfoSubtitle>
                            <SignedInUserEmail></SignedInUserEmail>
                          </InfoSubtitle>
                          <Box
                            m={6}
                            style={{ borderRadius: "1.5rem" }}
                            pt={1}
                          ></Box>
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
    </AppBar>
  );
};
