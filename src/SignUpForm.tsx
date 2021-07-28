import Container from '@material-ui/core/Container';
import { Typography, Card, AppBar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface Props {}

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
      minHeight: 128,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
      background : '#FFFFFF',
    },
    title: {
      flexGrow: 1,
      alignSelf: 'flex-end',
      color: "#000000"
    },
    field: {
        '& > *': {
          margin: theme.spacing(3),
          width: '25ch',
        }
    }
  }));

export const SignUpForm: React.FC<Props>= ({}) => {
    const classes = useStyles();
    
    return (
    <div className={classes.root}>
    <Container maxWidth="sm">
      <Card variant="outlined">
      <Typography component="div"  align='center' style={{ height: '100vh',}}>

        <AppBar position="static" elevation={0}>
        <Toolbar className={classes.toolbar}>
            <Typography className={classes.title} 
            variant="h3"  noWrap>
                Sign Up
            </Typography>
        </Toolbar>
        </AppBar>
    
        <form className={classes.field} noValidate autoComplete="on">
          <TextField id="outlined-basic" label="Name" 
          required color="secondary" variant="outlined"
          style = {{ width: 400 }} />
       
          <TextField id="outlined-basic" label="Email" 
          required color="secondary" variant="outlined" 
          style = {{ width: 400 }}/>
        
          <TextField id="outlined-basic" label="Phone" 
           color="secondary" variant="outlined" 
          style = {{ width: 400 }}/>
        
          <TextField id="outlined-basic" label="Current Year" 
          required color="secondary" variant="outlined" 
          style = {{ width: 400 }}/>
       
          <TextField id="outlined-basic" label="Graduating Year" 
          required color="secondary" variant="outlined" 
          style = {{ width: 400 }}/>
       
          <TextField id="outlined-basic" label="Major" 
          required color="secondary" variant="outlined" 
          style = {{ width: 400 }}/>
        </form>

        <Button size="large"
          variant = "outlined" 
          color="secondary"
          className={classes.button} >
          Sign Up
        </Button>

    </Typography>
    </Card>
    </Container>
    </div>
)}

export default SignUpForm;