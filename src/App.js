import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/Home'
import Info from './pages/Info'
import Login from './pages/Login'
import Bots from './pages/Bots'

import DiscordBots from './pages/bots/DiscordBots'
import TwitchBots from './pages/bots/TwitchBots'

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
                            <Route exact path="/bots/" component={Bots} />
                            <Route path="/info/" component={Info} />
                            <Route path="/login/" component={Login} />
                            <Route path="/bots/discordbots/" component={DiscordBots} />
                            <Route path="/bots/twitchbots/" component={TwitchBots} />   
                    </div>
                </div>
                </Router>
            </div>
        );
    }
}

export default App