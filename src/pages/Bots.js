import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Bots extends Component {
    render() {
        return (
            <div className='BotContainer'>
                <Link to="/bots/discordbots" className='Discord'>
                    <img src="./Discord-Logo-White.png" alt="Discord Logo" width="100%" height="100%"/>
                </Link>
                <Link to="/bots/twitchbots" className='Twitch'>
                    <img src="./Glitch_White_RGB.png" alt="Twitch Logo" width="100%" height="100%"/>
                </Link>
            </div>
        );
    }
}

export default Bots
