import { Grid, Typography } from "@material-ui/core";
import firebase from "firebase";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import { makeStyles } from "@material-ui/styles";

// function GetUserEmail() {
//   const auth = firebase.auth();
//   const user = auth.currentUser;
//   if (user) {
//     console.log(user.email);
//     return user.email;
//   } else {
//     console.log("not logged in");
//     return "Not Logged In";
//   }
// }

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
  const auth = firebase.auth();
  const user = auth.currentUser;
  if (user) {
    console.log(user.email);
    var email: any;
    email = user.email;
  } else {
    console.log("Not Logged In");
    email = "Not Logged In";
  }

  return (
    <Grid
      container
      direction="row-reverse"
      justifyContent="flex-end"
      alignItems="center"
      className={classes.gridContainerEmailIcon}
    >
      <Grid item>
        <Typography className={classes.userEmail}>{email}</Typography>
      </Grid>
      <Grid item>
        <AccountBoxRoundedIcon />
      </Grid>
    </Grid>
  );
};
