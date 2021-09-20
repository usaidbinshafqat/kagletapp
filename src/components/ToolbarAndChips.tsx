import {
  Typography,
  AppBar,
  Box,
  Popover,
  Button,
  Avatar,
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import logo from "../logos/favicon.png";
import logoText from "../logos/HomeHeader.png";
import PopupState, { bindPopover } from "material-ui-popup-state";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import React from "react";
import { auth } from "../firebaseSetup";
import { createTheme } from "@material-ui/core/styles";
import { SignedInUserEmail } from "./signedInUserEmail";

// import LocalBarIcon from "@material-ui/icons/LocalBar";
// import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
// import BackpackRoundedIcon from "@material-ui/icons/BackpackRounded";
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
}));

export const ToolbarAndChips = () => {
  const classes = useStyles();
  //this will be called later.

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

  function refreshPage() {
    window.location.reload();
  }

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
  // const nunito = {
  //   fontFamily: "Nunito",
  //   fontStyle: "bold",
  //   src: `
  //   url(${font}) format('woff')`,
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
    // typography: {
    //   h1: {
    //     fontFamily: "Nunito",
    //     fontWeight: 700,
    //     fontStyle: "bold",
    //   },
    // },
    // overrides: {
    //   MuiCssBaseline: {
    //     "@global": {
    //       "@font-face": [nunito],
    //     },
    //   },
    // },
  });

  return (
    <AppBar position="sticky" elevation={0}>
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
                          <SignedInUserEmail></SignedInUserEmail>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={signOut}
                            className={classes.button}
                          >
                            Logout
                          </Button>
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

      {/* <Toolbar className={classes.toolbar}>
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
      </Toolbar> */}
    </AppBar>
  );
};
