import React, { useReducer, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { Typography, Card, AppBar, Grid } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField, Toolbar } from "@material-ui/core";
import logo from "../logos/logo.png";
import { useHistory } from "react-router-dom";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginTop: theme.spacing(10),
    background: "#ff6500",
  },
  logo: {
    height: 250,
    width: 250,
    alignContent: "center",
    justify: "center",
    alignItems: "flex-start",
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    background: "#FFFFFF",
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
    color: "#000000",
  },
  field: {
    "& > *": {
      margin: theme.spacing(10),
      width: "25ch",
      background: "#ff6500",
    },
  },
}));

type State = {
  username: string;
  password: string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
};

const initialState: State = {
  username: "",
  password: "",
  isButtonDisabled: true,
  helperText: "",
  isError: false,
};

type Action =
  | { type: "setUsername"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "setIsButtonDisabled"; payload: boolean }
  | { type: "loginSuccess"; payload: string }
  | { type: "loginFailed"; payload: string }
  | { type: "setIsError"; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setUsername":
      return {
        ...state,
        username: action.payload,
      };
    case "setPassword":
      return {
        ...state,
        password: action.payload,
      };
    case "setIsButtonDisabled":
      return {
        ...state,
        isButtonDisabled: action.payload,
      };
    case "loginSuccess":
      return {
        ...state,
        helperText: action.payload,
        isError: false,
      };
    case "loginFailed":
      return {
        ...state,
        helperText: action.payload,
        isError: true,
      };
    case "setIsError":
      return {
        ...state,
        isError: action.payload,
      };
  }
};

export const Login = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
      dispatch({
        type: "setIsButtonDisabled",
        payload: false,
      });
    } else {
      dispatch({
        type: "setIsButtonDisabled",
        payload: true,
      });
    }
  }, [state.username, state.password]);

  const handleLogin = () => {
    if (state.username === "abc@email.com" && state.password === "password") {
      dispatch({
        type: "loginSuccess",
        payload: "Logged in Successfully",
      });
    } else {
      dispatch({
        type: "loginFailed",
        payload: "Incorrect username or password",
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setUsername",
      payload: event.target.value,
    });
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setPassword",
      payload: event.target.value,
    });
  };

  const history = useHistory();
  return (
    <Grid container justify="center" alignItems="center" direction="column">
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
      <Grid item>
        <div className="col-centeredd">
          <img alt="Logo" className={classes.logo} src={logo} />
        </div>
      </Grid>

      <Grid item>
        <form>
          <Grid item>
            <TextField
              error={state.isError}
              id="username"
              type="email"
              label="Username"
              placeholder="Username"
              margin="normal"
              variant="outlined"
              onChange={handleUsernameChange}
              onKeyPress={handleKeyPress}
              //style = {{ width: 400 }}
            />
          </Grid>

          <Grid item>
            <TextField
              error={state.isError}
              id="password"
              variant="outlined"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              helperText={state.helperText}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
              //style = {{ width: 400 }}
            />
          </Grid>
        </form>
      </Grid>

      <Grid item>
        <Button
          size="large"
          variant="outlined"
          disabled={state.isButtonDisabled}
          onClick={handleLogin}
          className={classes.button}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );
};
