import React, {Component} from 'react';
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';

class Bots extends Component {
    render() {
        return (
            <div className='BotContainer'>
                <div className='Discord'>
                    <LazyLoad>
                        <img src="./Discord-Logo-Full.png" alt="Discord Logo" width="100%" />
                    </LazyLoad>
                    <hr size="3" color="#000000" width="100%"></hr>
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <LazyLoad>
                        <Link to="/bots/discordbots/zemabot" className="BotHeader">
                            <img src="/ZemaBot.png" alt="ZemaBot" className="BotIcon" width="25%" height="25%"></img>
                            <h1>ZemaBot</h1>
                        </Link>
                    </LazyLoad>
                </div>
                <div className='Twitch'>
                    <LazyLoad>
                        <img src="./Twitch-Logo-Full.png" alt="Twitch Logo" width="100%"/>
                    </LazyLoad>
                    <hr size="3" color="#000000" width="100%"></hr>
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <LazyLoad>
                        <Link to="/bots/twitchbots/zemabot" className="BotHeader">
                            <img src="/ZemaBot.png" alt="ZemaBot" className="BotIcon" width="25%" height="25%"></img>
                            <h1>ZemaBot</h1>
                        </Link>
                    </LazyLoad>
                </div>
            </div>
        );
    }
}

export default Bots
