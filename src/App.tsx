import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { SignUpForm } from "./components/SignUpForm";
import { SplashScreen } from "./components/SplashScreen";
import { StudySesh } from "./components/StudySesh";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><SplashScreen /> </Route>
        <Route exact path="/signup"><SignUpForm /></Route>
        <Route exact path="/login"><Login /></Route>
      </Switch>
    </Router>
    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={SplashScreen} />
    //     <Route path="/SignUp" exact component={SignUpForm} />
    //     {/* <Route path="/About" component={About} />
    //     <Route path="/Contact" component={Contact} />
    //   <Route path="/Products" component={Products} /> */}
    //   </Switch>
    // </Router>
  );
  }