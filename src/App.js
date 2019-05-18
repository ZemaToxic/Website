import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/Home'
import Info from './pages/Info'
import Login from './pages/Login'

  function Bots() {
      return <h2>Bots</h2>
  }
  function DiscordBots() {
    return <h2>Discord Bots</h2>
}
  function TwitchBots() {
    return <h2>Twitch Bots</h2>
}

class App extends Component {
    render() {
        return (
            <div className="App" >
                <Router>
                <div className="container">
                    <div className="sidebar">
                            <ul>
                                <li>
                                    <Link to="/"><h2>Home</h2></Link>
                                </li>
                                <li>
                                    <Link to="/bots"><h2>Bots</h2></Link>
                                </li>
                                <li>
                                    <Link to="/discordbots"><h3>Discord Bots</h3></Link>
                                </li>
                                <li>
                                    <Link to="/twitchbots"><h3>Twitch Bots</h3></Link>
                                </li>
                                <li>
                                    <Link to="/info"><h2>Info</h2></Link>
                                </li>
                                <li>
                                    <Link to="/login"><h2>Login</h2></Link>
                                </li>
                            </ul>
                    </div>
                    <div className="content">
                        <h1>ZemaToxic Bots</h1>
                            <Route path="/" exact component={Home} />
                            <Route path="/bots/" component={Bots} />
                            <Route path="/discordbots/" component={DiscordBots} />
                            <Route path="/twitchbots/" component={TwitchBots} />
                            <Route path="/info/" component={Info} />
                            <Route path="/login/" component={Login} />
                    </div>
                </div>
                </Router>
            </div>
        );
    }
}

export default App