import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './app.css'


function Index() {
    return <h2>Home</h2>;
  }
  
  function Bots() {
      return <h2>Bots</h2>
  }
  function DiscordBots() {
    return <h2>Discord Bots</h2>
}
  function TwitchBots() {
    return <h2>Twitch Bots</h2>
}

  function Info() {
    return <h2>Info</h2>;
  }
  
  function Login() {
    return <h2>Login</h2>;
  }
  

class App extends Component {
    render() {
        return (
            <div className="App" >
                <div className="container">
                    <div className="sidebar">
                        <Router>
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

                            <Route path="/" exact component={Index} />
                            <Route path="/bots/" component={Bots} />
                            <Route path="/discordbots/" component={DiscordBots} />
                            <Route path="/twitchbots/" component={TwitchBots} />
                            <Route path="/info/" component={Info} />
                            <Route path="/login/" component={Login} />
                        </Router>
                    </div>
                    <div className="content">
                        <h1>ZemaToxic Bots</h1>
                        Test home page goes here.

                    </div>
                </div>
            </div>
        );
    }
}

export default App