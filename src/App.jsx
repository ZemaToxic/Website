import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Bots from "./pages/Bots";

import DiscordBots from "./pages/bots/DiscordBots";
import TwitchBots from "./pages/bots/TwitchBots";

import { history } from "./_helpers";
import { PrivateRoute } from "./_components/PrivateRoute";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";

class App extends Component {
  render() {
  return (
    <Router history={history}>
      <div className="App">
        <div className="container">
          <div className="navbar">
            <Link to="/" className="NavBarLink"> <h3>Home</h3> </Link>
            <Link to="/info" className="NavBarLink"> <h3>About Me</h3> </Link>
            <Link to="/bots" className="NavBarLink"> <h3>Bots</h3> </Link>
            <Link to="/login" className="NavBarLink"> <h3>Login</h3> </Link>
          </div>

          <div className="content">
            <Route path="/" exact component={Home} />
            <Route path="/info/" component={Info} />
            <Route exact path="/bots/" component={Bots} />
            <Route path="/login/" component={LoginPage} />
            <PrivateRoute exact path="/homePage" component={HomePage} />
            <Route path="/bots/discordbots/" component={DiscordBots} />
            <Route path="/bots/twitchbots/" component={TwitchBots} />
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