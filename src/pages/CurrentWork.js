import React, {Component} from 'react';
import { Link } from "react-router-dom";
import ImageLoader from "./ImageLoader"

class CurrentWork extends Component {
    render() {
        return (
            <div className='CurrentWorkContainer'>
                <div className='GameDev'>
                    <h1>Adventure Of A Box</h1>
                    <hr size="3" color="#000000" width="100%"></hr>
                    <p>
                        Adventure Of A Box is a personal Unity project I have been working on in my spare
                         time, I am currently working on Level Design and wish to publish it to Steam 
                         and port it to Mobile Devices by the end of 2020.
                    </p>
                    <ImageLoader src="/AdventureOfABox.png" alt="Logo" width="100%" height="60%"/>
                </div>
                <div className='Discord'>
                    <ImageLoader src="./Discord-Logo-Full.png" alt="Discord Logo" width="100%" />
                    <hr size="3" color="#000000" width="100%"></hr>
                    <p>
                    Below you can find My current Discord chat bot, it is mostly used in my own personal
                    server and has a few features to help me manage it.
                    </p>
                    <h3>Features include:</h3>
                    <ul>
                        <li>
                        - Individual Guild options
                        </li>
                        <li>
                        - Message edit logging
                        </li>
                        <li>
                        - Message delete logging
                        </li>
                        <li>
                        - User Join/Leave logging
                        </li>
                        <li>
                        - Role Add/Remove logging
                        </li>
                        <li>
                        - User Nickname logging
                        </li>
                    </ul>     
                    <Link to="currentwork/bots/discordbots/zemabot" className="BotHeader">
                        <ImageLoader src="/ZemaBot.png" alt="ZemaBot" className="BotIcon" width="25%" height="25%" />
                        <h1>ZemaBot</h1>
                    </Link>
                    </div>
                <div className='Twitch'>
                    <ImageLoader src="./Twitch-Logo-Full.png" alt="Twitch Logo" width="100%"/>
                    <hr size="3" color="#000000" width="100%"></hr>
                    <p>
                        I have also made a few Twitch chat bots, these are used to help Streamers and their
                         moderation teams these have features such as but not limited to:
                    </p>
                    <ul>
                        <li>
                            - Automatically Ban users based on pre defined Variables i.e swear words
                        </li>
                        <li>
                            - Automatically Time out users for innaproptiate comments.
                        </li>
                        <li>
                            - Return the current stream's Uptime (how long its been going)
                        </li>
                        <li>
                            - Respond to custom commands created by the Streamer and Mod team.
                        </li>
                    </ul>
                        <div className="BotHeader">
                            <ImageLoader src="/ZemaBot.png" alt="ZemaBot" className="BotIcon" width="25%" height="25%"/>
                            <h1>ZemaBot</h1>
                        </div>
                        <div className="BotHeader">
                            <ImageLoader src="/Cy_Net.png" alt="Cy_Net" className="BotIcon" width="25%" height="25%"/>
                            <h1>Cy_Net</h1>
                        </div>
                </div>
            </div>
        );
    }
}

export default CurrentWork
