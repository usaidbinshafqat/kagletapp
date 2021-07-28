import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { BrowserRouter as Router, Link } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
  button: {
    color: "red",
    marginTop: theme.spacing(-30),
  },
  text: {
    fontSize: '5em',
    paddingTop: theme.spacing(10),
  },
  root: {
    '& > *': {
      margin: theme.spacing(20),
      width: '25ch',
      color: "red"
    },
  },
  secondText: { 
    margin: theme.spacing(-12),
  },
}));


export default function SplashScreen() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Card variant="outlined">
        <Typography component="div"  align='center' style={{ height: '100vh',}}>
          <h1 
          className={classes.text}>
            Kaglet
          </h1>

          <form className={classes.root} noValidate autoComplete="on">
          <TextField id="outlined-basic" label="Email" 
          required color="secondary" variant="outlined" />
          </form>
          <Router>
          <Link to="/SignUpForm">
          <Button size="large"
          variant = "outlined" 
          color="secondary"
          className={classes.button} >
          Sign Up
          </Button> 
          </Link>
          </Router>
          <Typography variant="subtitle1" className={classes.secondText}>Or login</Typography>
        </Typography>
        
      </Card>
      </Container>
    </React.Fragment>
  );
}