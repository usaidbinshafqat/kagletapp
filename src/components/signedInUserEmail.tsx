import { Grid, Typography } from "@material-ui/core";
import firebase from "firebase";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import { makeStyles } from "@material-ui/styles";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

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
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar sx={{ bgcolor: "#EE6C4D", width: 80, height: 80 }}>
          <h1>KC</h1>
        </Avatar>
        &nbsp;
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography className={classes.userEmail}>{email}</Typography>
      </Grid>
    </Grid>
  );
};
