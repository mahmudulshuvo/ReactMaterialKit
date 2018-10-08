import React, { Component } from "react";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import HomePage from "./views/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LandingPage /> */}
        {/* <LoginPage /> */}
        {/* <HomePage /> */}
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/Home-page" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
