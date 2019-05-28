import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Bots from "./pages/Bots";

import DiscordBots from "./pages/bots/DiscordBots";
import TwitchBots from "./pages/bots/TwitchBots";

import { history } from "./_helpers";
import { PrivateRoute } from "./_components/PrivateRoute";
import { HomePage } from "./HomePage/HomePage";
import { LoginPage } from "./LoginPage/LoginPage";


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <div className="container">
            <div className="sidebar">
              <ul>
                <li>
                  <Link to="/" className="SidebarLink">
                    <h2>Home</h2>
                  </Link>
                </li>
                <li>
                  <Link to="/bots" className="SidebarLink">
                    <h2>Bots</h2>
                  </Link>
                </li>
                <li>
                  <Link to="/info" className="SidebarLink">
                    <h2>Info</h2>
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="SidebarLink">
                    <h2>Login</h2>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="content">
              <div className="PageTop">
                <h1>ZemaToxic Bots</h1>
              </div>
              <Route path="/" exact component={Home} />
              <Route exact path="/bots/" component={Bots} />
              <Route path="/info/" component={Info} />
              <Route path="/login/" component={LoginPage} />
              <PrivateRoute exact path="/home" component={HomePage} />
              <Route path="/bots/discordbots/" component={DiscordBots} />
              <Route path="/bots/twitchbots/" component={TwitchBots} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
