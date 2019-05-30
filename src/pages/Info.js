import React, {Component} from 'react';
import Twitch from "./Twitch";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="InfoBox">
                    <h3>About me</h3>
                    <ul>
                        <li>
                            24 Year old Kiwi
                        </li>
                        <li>
                            C++, C#, Js, React
                        </li>
                        <li>
                            Creator of TwitchBots and Discord bots.
                        </li>
                    </ul>
                </div>
                <div className="TwitchBox">
                    <Twitch />
                </div>
            </div>
        );
    }
}

export default Home
