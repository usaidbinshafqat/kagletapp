import { FormControl, Grid, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo from "../logos/logo.png";
import { Typography, AppBar } from "@material-ui/core";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { useHistory } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import clsx from 'clsx';
import { useRef } from "react";
import { auth } from "../firebaseSetup";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    color: "red",
    alignContent: "center",
    alignItems: "flex-start",
    justify: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    borderRadius: 20,
    padding: "0.25rem 2rem",
    borderColor: "#becddc",
  },
  logo: {
    height: 300,
    width: 300,
    alignContent: "center",
    justify: "center",
    alignItems: "flex-start",
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
  form: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  appicon: {},
  marginPassword: {
    margin: theme.spacing(1),
  },
  textfield: {
    width: 300
  }
}));

interface State {
  password: string;
  showPassword: boolean;
}

export const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
  };
  // firebaseItems
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.error(error);
    }
  };
  
  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.error(error);
    }
  };
  
  const signOut = async () => {
    await auth.signOut();
  };
  return (
    <div className={classes.root}>
      <Grid container justifyContent="center" direction="column">
        <AppBar position="sticky" elevation={0}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              aria-label="back"
              onClick={() => history.push("/splashscreen")}
            >
              <ArrowBackRoundedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Typography component="div" align="center" style={{ height: "100vh" }}>
          <Grid item>
            <div className="col-centered">
              <img alt="Logo" className={classes.logo} src={logo} />
            </div>
          </Grid>

          <Grid item>
            <form className={classes.form} noValidate autoComplete="on">
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  required
                  color="secondary"
                  variant="outlined"
                  placeholder="@kzoo.edu"
                  inputRef={emailRef}
                  className={classes.textfield}
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl
                className={clsx(classes.marginPassword, classes.textfield)}
                variant="outlined"
                color="secondary"
                required
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  inputRef={passwordRef}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={85}
                />
              </FormControl>
              </Grid>
            </form>
          </Grid>

          <Grid item>
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              onClick={signIn}
              className={classes.button}
            >
              Login
            </Button>
          </Grid>

          <Grid item>
            <Button
              size="large"
              onClick={createAccount}
              color="secondary"
              className={classes.button}
            >
              Signup
            </Button>
          </Grid>
        </Typography>
      </Grid>
    </div>
  );
};
