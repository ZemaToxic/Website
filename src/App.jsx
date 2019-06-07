import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import CurrentWork from "./pages/CurrentWork";

import DiscordBots from "./pages/bots/DiscordBots";
import TwitchBots from "./pages/bots/TwitchBots";

import { history } from "./_helpers";
import { PrivateRoute } from "./_components/PrivateRoute";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { DropDown } from "./pages/DropDown"

class App extends Component {
  render() {
  return (
    <Router history={history}>
      <div className="App">
        <div className="container">
          <div className="navbar">
            <Link to="/" className="NavBarLink"> <h3>Home</h3> </Link>
            <Link to="/about" className="NavBarLink"> <h3>About Me</h3> </Link>
            <Link to="/currentwork" className="NavBarLink"> <h3>Current Work</h3> </Link>
            <DropDown title="Login">
                <LoginPage />
            </DropDown>
          </div>

          <div className="content">
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={AboutMe} />
            <Route exact path="/currentwork/" component={CurrentWork} />
            <Route path="/login/" component={LoginPage} />
            <PrivateRoute exact path="/homePage" component={HomePage} />
            <Route path="/currentwork/bots/discordbots/" component={DiscordBots} />
            <Route path="/currentwork/bots/twitchbots/" component={TwitchBots} />
          </div>

          <div className="footer">
            <p>Made with React by ZemaToxic</p>
          </div>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;