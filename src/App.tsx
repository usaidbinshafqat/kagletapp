import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { SignUpForm } from "./components/SignUpForm";
import { SplashScreen } from "./components/SplashScreen";
import { HomeScreen } from "./components/HomeScreen";



export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><SplashScreen /> </Route>
        <Route exact path="/signup"><SignUpForm /></Route>
        <Route exact path="/login"><Login /> </Route>
        <Route exact path="/studyseshes"><HomeScreen /> </Route>
        <Route exact path="/splashscreen"><SplashScreen /></Route>
      </Switch>
    </Router>
  );
  }