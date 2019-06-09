import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>ZemaToxic</h1>
                <p>
                    I am a 24 year old Junior Game developer, I am comfortable with the following Coding languages 
                </p>
                <ul>
                    <li>
                        - C++
                    </li>
                    <li>
                        - C#
                    </li>
                    <li>
                        - Javascript / JS 
                    </li>
                </ul>
                <p>
                    I have recently branched out into using the React Framework to make websites and have Developed and hosted this site.
                </p>
                <div className="Social">
                    <h1>You can find me on Social Media at the following places</h1>
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
