import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Bots extends Component {
    render() {
        return (
            <div className='BotContainer'>
                <div className='Discord'>
                    <img src="./Discord-Logo-Full.png" alt="Discord Logo" width="100%" />
                    <hr size="3" color="#000000" width="100%"></hr>
                    <Link to="/bots/discordbots"> <h1>ZemaBot</h1> </Link>
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
                <div className='Twitch'>
                    <img src="./Twitch-Logo-Full.png" alt="Twitch Logo" width="100%"/>
                    <hr size="3" color="#000000" width="100%"></hr>
                    <Link to="/bots/twitchbots"> <h1>ZemaBot</h1> </Link>
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>

            </div>

        );
    }
}

export default Bots
