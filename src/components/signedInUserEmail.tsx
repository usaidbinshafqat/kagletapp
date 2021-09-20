import { Grid, Typography } from "@material-ui/core";
import firebase from "firebase";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import { makeStyles } from "@material-ui/styles";

function GetUserEmail() {
  const auth = firebase.auth();
  const user = auth.currentUser;
  if (user != null) {
    // var email: any = "";
    return user.email;
  } else {
    return "Not Logged In";
  }
}

const useStyles = makeStyles((theme) => ({
  userEmail: {
    paddingBottom: 5,
    paddingLeft: 5,
  },
  gridContainerEmailIcon: {
    paddingTop: 10,
    paddingBottom: 5,
  },
}));

export const SignedInUserEmail = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row-reverse"
      justifyContent="flex-end"
      alignItems="center"
      className={classes.gridContainerEmailIcon}
    >
      <Grid item>
        <Typography className={classes.userEmail}>{GetUserEmail}</Typography>
      </Grid>
      <Grid item>
        <AccountBoxRoundedIcon />
      </Grid>
    </Grid>
  );
};
