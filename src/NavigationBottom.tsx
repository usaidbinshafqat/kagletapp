import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Container, Card } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HouseRoundedIcon from '@material-ui/icons/HouseRounded';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import BackpackRoundedIcon from '@material-ui/icons/BackpackRounded';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
        color: "#000000"
      },
      toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        background : '#FFFFFF',
      },
      bottom: {
          paddingTop: theme.spacing(92),

      }
      
  }),
);

export default function EventOptions() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return(

        <Container maxWidth="sm">
        <Card variant="outlined">
        <Typography component="div"  align='center' style={{ height: '100vh',}}>
  
          <AppBar position="static" elevation={0}>
          <Toolbar className={classes.toolbar}>
              <Typography className={classes.title} 
              variant="h5"  noWrap>
                  'Name of TabBar'
              </Typography>
          </Toolbar>
          </AppBar>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
             setValue(newValue);
            }}
             showLabels
             className={classes.bottom}
              >
        <BottomNavigationAction label="House Parties" icon={<HouseRoundedIcon />} />
        <BottomNavigationAction label="Campus Events" icon={<SchoolRoundedIcon />} />
        <BottomNavigationAction label="Study Seshes" icon={<BackpackRoundedIcon />} />
        </BottomNavigation>

        </Typography>
        </Card>
        </Container>

    )
}
