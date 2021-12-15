import { Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import firebase from "firebase";
import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { Info, InfoSubtitle, InfoTitle } from "@mui-treasury/components/info";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    alignContent: "center",
    alignItems: "flex-start",
    justify: "center",
    borderRadius: 20,
    textTransform: "none",
    display: "inline-block",
    fontFamily: "'Sen', sans-serif",
  },
  rsvpCount: {
    paddingBottom: 7,
    paddingLeft: 10,
  },
  attending: {
    paddingLeft: 6,
    fontFamily: "'Nunito', 'sans-serif'",
    textAlign: "left",
    fontSize: "1.3rem",
  },
  typography: {
    fontSize: 35,
  },
}));

export interface RsvpDetails {
  eventID?: string;
  rsvpList?: any;
  email?:string;
}


export const RsvpListComp: React.FC<RsvpDetails> = (props: RsvpDetails) => {
  const classes = useStyles();

  var x:number = (props.rsvpList.length - 1); //For avatar picker
  var y:number = (props.rsvpList.length - 1); //For name extraction

  var rsvpArray:any[] = props.rsvpList;
  const nameExtract = () => {
    let nameOfPerson:any = rsvpArray[y]
    y--;
    let Name:any = ''
    let fName:any = ''
    let lName:any = ''
    let point:any = 0;

    for (let i = 0; i < nameOfPerson.length; i++) {
      if(nameOfPerson[i] == '.'){break}
      fName = fName + (nameOfPerson[i]);
      point++;
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

  const [count, setCount] = React.useState(props.rsvpList.length);
  
  function stringToColor(string: string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
  }}


  function AvatarPicker() {
      let nameOfPerson:any = rsvpArray[x]
      x--;
      let Name:any = ''
      let fName:any = ''
      let lName:any = ''
      let point:any = 0;
      console.log(rsvpArray)

      for (let i = 0; i < nameOfPerson.length; i++) {
        if(nameOfPerson[i] == '.'){break}
        fName = fName + (nameOfPerson[i]);
        point++;
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
  
  
      let initialOfPerson:any = Name
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
  
    return(
      <Avatar {...stringAvatar(Initial)}>
        <Typography>{Initial}</Typography>
      </Avatar>
    );
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <Typography variant="h6" component="div">
              List of attendees
            </Typography>

          
            {[...Array(count)].map((value: undefined, index: number) => (
            <List dense={true}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      {AvatarPicker()}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary= {nameExtract()}
                    //secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
            </List>
            ))}
          </Grid>
        </Grid>
        </Box>
    </div>
  );
};
