import { Grid, Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { LoginLogic } from "./LoginLogic";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import background from "../back.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexFlow: "column",
    display: "flex",
    height: "100vh",
    width: "100vh",
  },
  button: {
    alignContent: "center",
    alignItems: "flex-start",
    justify: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    borderRadius: 20,
    padding: "0.25rem 2rem",
  },
  logo: {
    height: 300,
    width: 300,
    alignContent: "center",
    justify: "center",
    alignItems: "flex-start",
  },
  toolbar: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    backgroundColor: "#ffffff",
  },
  form: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },

  textfield: {
    width: 300,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

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

const LoginButtonFunctions = () => {
  const classes = useStyles();
  return (
    <Button
      size="large"
      variant="outlined"
      color="primary"
      className={classes.button}
    >
      Get Login Link
    </Button>
  );
};

const LoginUIMobile = () => {
  // image in back, login button on top
  return (
    <div style={{ height: "70vh", padding: 0, margin: 0 }}>
      <Box
        display="flex"
        flex="1"
        justifyContent="space-around"
        style={{ height: "90vh" }}
      >
        <Grid container justifyContent="center" direction="column">
          <LoginLogic />
        </Grid>
      </Box>
    </div>
  );
};

const LoginUIBigScreen = () => {
  return (
    <div style={{ height: "70vh", margin: 0, padding: 0 }}>
      <Box
        display="flex"
        flex="1"
        justifyContent="space-around"
        style={{ height: "70vh", width: "100vw" }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <img
              src={background}
              alt="doodle"
              style={{
                minHeight: "40vh",
                maxHeight: "100vh",
                maxWidth: "50vw",
                backgroundSize: "contain",
              }}
            ></img>
          </Grid>
          <Grid item xs={6}>
            <LoginLogic />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export const NewLoginUI = () => {
  console.log(isMobile);

  function isMobile() {
    if (window.screen.width < 600) {
      return true;
    } else {
      return false;
    }
  }
  return (
    //if mobile
    <>
      <div>{isMobile() && <LoginUIMobile />}</div>

      <div>{!isMobile() && <LoginUIBigScreen />}</div>
      {/* <div> */}
      {/* <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <LoginButtonFunctions />
          <Grid item></Grid>
        </Grid>
      </div> */}
    </>

    //if not logged in
  );
};
