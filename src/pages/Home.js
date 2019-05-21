import React, {Component} from 'react';
import Twitch from "./Twitch";

class Home extends Component {
    render() {
        return (
            <dv className="Home">
                <div className="TwitchBox">
                    <Twitch />
                </div>
                <div className="InfoBox">
                    <h3>About me</h3>
                    <p>
                        
                    </p>
                </div>
            </dv>
        );
    }
}

export default Home
