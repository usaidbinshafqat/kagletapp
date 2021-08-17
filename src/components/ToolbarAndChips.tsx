import React from "react";
import { Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import logo from "../logos/favicon.png";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import BackpackRoundedIcon from "@material-ui/icons/BackpackRounded";
import { Chip } from "@material-ui/core";

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
}));

export const ToolbarAndChips = () => {
  const classes = useStyles();
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
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <img className={classes.appicon} src={logo} alt="Logo" />
          <Typography variant="h5" className={classes.title}>
            What's Poppin @K
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
