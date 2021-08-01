import { Grid, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo from "../logos/logo.png";
import { Typography, Card, AppBar } from "@material-ui/core";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { useHistory } from "react-router-dom";

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
  appicon: {
  
  }
}));

export const SignUpForm = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Grid container justifyContent="center" direction="column">
        <AppBar position="sticky" elevation={0}>
          <Toolbar className={classes.toolbar}>
          <IconButton aria-label="back"
          onClick={() => history.push("/splashscreen")}
          >
          <ArrowBackRoundedIcon />
        </IconButton>
          </Toolbar>
        </AppBar>

        <Card variant="outlined">
          <Typography
            component="div"
            align="center"
            style={{ height: "100vh" }}
          >
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
                    label="Name:"
                    required
                    color="secondary"
                    variant="outlined"
                    placeholder="John Doe"
                    style={{ width: 300 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Email:"
                    required
                    color="secondary"
                    variant="outlined"
                    placeholder="John.Doe21@kzoo.edu"
                    style={{ width: 300 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Phone:"
                    color="secondary"
                    variant="outlined"
                    placeholder="1234567890"
                    style={{ width: 300 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Current Year:"
                    required
                    color="secondary"
                    variant="outlined"
                    placeholder="Freshman"
                    style={{ width: 300 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Graduating Year:"
                    required
                    color="secondary"
                    variant="outlined"
                    placeholder="2023"
                    style={{ width: 300 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Major:"
                    required
                    color="secondary"
                    variant="outlined"
                    placeholder="Mathematics"
                    style={{ width: 300 }}
                  />
                </Grid>
              </form>
            </Grid>

            <Grid item>
              <Button
                size="large"
                variant="outlined"
                color="secondary"
                className={classes.button}
              >
                Sign Up
              </Button>
            </Grid>
          </Typography>
        </Card>
      </Grid>
    </div>
  );
};
