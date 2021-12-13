import { Grid, Typography } from "@material-ui/core";
import firebase from "firebase";
import { makeStyles } from "@material-ui/styles";
import Avatar from "@mui/material/Avatar";
import { Info, InfoSubtitle, InfoTitle } from "@mui-treasury/components/info";

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
  typography: {
    fontSize: 35,
  },
}));

export const SignedInUserEmail = () => {
  const classes = useStyles();
  const auth = firebase.auth();
  const user = auth.currentUser;
  const nameExtract = () => {
    let nameOfPerson:any = email
    nameOfPerson.toString();
    let Name:any = ''
    let fName:any = ''
    let lName:any = ''
    let point:any = 0;
    let seclet:any = 1;
    for (let i = 0; i < nameOfPerson.length; i++) {
      if(nameOfPerson[i] == '.'){break}
      fName = fName + (nameOfPerson[i]);
      point++;
      seclet = point
    }
    fName = fName[0].toUpperCase() + fName.substring(1)
    Name = fName + (' ')
    for (let i = (point+1); i < nameOfPerson.length; i++) {
      if(nameOfPerson[i] == '@'){break}
      if (Number(nameOfPerson[i]) == 1){break}
      if (Number(nameOfPerson[i]) == 2){break}
      lName = lName + (nameOfPerson[i]);
    }
    lName = lName.charAt(0).toUpperCase() + lName.substring(1)
    Name = Name + lName
    
    return (Name);
  }
  const initialExtract = () => {
    let initialOfPerson:any = nameExtract()
    let Initial:any = ''
    let fInitial:any = initialOfPerson[0]
    let lInitial:any = ''
    let spaceChecker:boolean = false
    for (let i = 0; i < initialOfPerson.length; i++) {
      if(spaceChecker == true){
        lInitial = initialOfPerson[i]
        break}
        if (initialOfPerson[i] == ' '){spaceChecker = true}
    }
    Initial = fInitial + lInitial
    return (Initial)
  }

  if (user) {
    console.log(user.email);
    var email: any;
    email = user.email;
  } else {
    email = "Not Logged In";
    console.log(email);
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
          <Typography className={classes.typography}>{initialExtract()}</Typography>
        </Avatar>
        &nbsp;
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {/* <InfoSubtitle>{email}</InfoSubtitle> */}
        <InfoSubtitle>{nameExtract()}</InfoSubtitle>
      </Grid>
    </Grid>
  );
};
