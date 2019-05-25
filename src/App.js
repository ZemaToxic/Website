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
         <Router>
            <div className="App" >
                <div className="container">
                    <div className="sidebar">
                            <ul>
                                <li>
                                    <Link to="/" className="SidebarLink"><h2>Home</h2></Link>
                                </li>
                                <li>
                                    <Link to="/bots" className="SidebarLink"><h2>Bots</h2></Link>
                                </li>
                                <li>
                                    <Link to="/info" className="SidebarLink"><h2>Info</h2></Link>
                                </li>
                                <li>
                                    <Link to="/login" className="SidebarLink"><h2>Login</h2></Link>
                                </li>
                            </ul>
                    </div>
                    <div className="content">
                        <div className="PageTop"><h1>ZemaToxic Bots</h1></div>
                            <Route path="/" exact component={Home} />
                            <Route path="/bots/" component={Bots} />
                            <Route path="/info/" component={Info} />
                            <Route path="/login/" component={Login} />
                            <Route path="/bots/discordbots/" component={DiscordBots} />
                            <Route path="/bots/twitchbots/" component={TwitchBots} />
                    </div>
                </div>
            </div>
        </Router>
        );
    }
}

export default App