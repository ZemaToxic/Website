import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>Crystal Belladonna</h1>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <div className="Social">
                    <h1>I can be found on Social Media at the following places</h1>
                    <div className="ICONS">
                        <div className='Twitter'>
                            <h3>Twitter</h3> <SocialIcon url="http://twitter.com/zematoxic" />
                        </div>
                        <div className='GitHub'>
                            <h3>GitHub</h3> <SocialIcon url="http://github.com/ZemaToxic" />
                        </div>
                        <div className='TwitchIcon'>
                            <h3>Twitch</h3> <SocialIcon url="http://twitch.tv/zematoxic" />
                        </div>
                        <div className='Reddit'>
                            <h3>Reddit</h3> <SocialIcon url="https://www.reddit.com/user/ZemaToxic" />
                        </div>
                        <div className='Instagram'>
                            <h3>Instagram</h3> <SocialIcon url="https://www.instagram.com/zematoxic/" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home
