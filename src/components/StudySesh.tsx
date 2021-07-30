import Container from "@material-ui/core/Container";
import { Typography, Card, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    color: "red",
    marginTop: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    backgroundColor: "#ffffff" 
  },
  title: {
    flexGrow: 1,
    color: "#000000",
    paddingLeft: theme.spacing(7)
  },
  subtitle: {
    flexGrow: 1,
    alignSelf: "flex-end",
    color: "#000000",
  },
  field: {
    "& > *": {
      margin: theme.spacing(3),
      width: "25ch",
    },
  },
  margin: {
    margin: 0,
    top: "auto",
    right: 170,
    bottom: 30,
    left: "auto",
    position: "fixed",
  },
  extendedIcon: {
    marginRight: theme.spacing(2),
  },
}));

export const StudySesh = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Card variant="outlined">
          <Typography
            component="div"
            align="center"
            style={{ height: "100vh" }}
          >
            <AppBar position="static">
        <Toolbar className={classes.toolbar}>

          <Typography variant="h5" className={classes.title}>
            Study Seshes
          </Typography>
          <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
              >
                <AccountCircle />
              </IconButton>
        </Toolbar>
      </AppBar>

            <div>
              <Fab
                aria-label="add"
                color="secondary"
                className={classes.margin}
              >
                <AddIcon />
              </Fab>
            </div>
          </Typography>
        </Card>
      </Container>
    </div>
  );
};
