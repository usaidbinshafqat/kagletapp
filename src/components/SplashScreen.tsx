import { AppBar, Grid, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import logo from "../logos/logo.png";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    height: 300,
    width: 300,
    alignContent: "center",
    justify: "center",
    alignItems: "flex-start",
  },
  button: {
    color: "red",
    alignContent: "center",
    alignItems: "flex-start",
    justify: "center",
    marginTop: theme.spacing(2),
    borderRadius: 20,
    padding: "0.25rem 2rem",
    borderColor: "#becddc",
  },
  loginButton:{
    color: "red",
    alignContent: "center",
    alignItems: "flex-start",
    justify: "center",
    marginTop: theme.spacing(2),
    borderRadius: 20,
    padding: "0.25rem 2rem",
    borderColor: "#becddc",
    textTransform: "none"
  },
  toolbar: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    backgroundColor: "#ffffff",
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
    color: "#000000",
  },
  field: {
    "& > *": {
      margin: theme.spacing(3),
      width: "25ch",
    },
  },
}));

export const SplashScreen = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.toolbar}>
        </Toolbar>
      </AppBar>
      <Grid item>
        <div className="col-centeredd">
          <img alt="Logo" className={classes.logo} src={logo} />
        </div>
      </Grid>

      <Grid item>
        <Button
          size="large"
          variant="outlined"
          color="secondary"
          className={classes.button}
          onClick={() => history.push("/signup")}
        >
          Sign Up
        </Button>
      </Grid>

      <Grid item>
        <Button
          size="small"
          color="primary"
          className={classes.loginButton}
          onClick={() => history.push("/login")}
        >
          Or Login
        </Button>
      </Grid>

      <Grid item>
        <Button
          size="small"
          color="primary"
          className={classes.button}
          onClick={() => history.push("/studyseshes")}
        >
          Home Screen Test
        </Button>
      </Grid>

    </Grid>
  );
};
