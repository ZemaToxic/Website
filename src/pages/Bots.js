import React, {Component} from 'react';

class Bots extends Component {
    render() {
        return (
            <div className='BotContainer'>
                <div className='Discord'>
                    <p>Discord</p>
                    <img src="src/assets/Logos/Discord-Logo-Black.png" alt="Discord Logo" width="400" height="400"/>
                </div>
                <div className='Twitch'>
                    <p>Twitch</p>
                    <img src="/assets/Logos/Glitch_White_RGB.png" alt="Twitch Logo" width="150" height="150"/>
                </div>
            </div>
        );
    }
}

export default Bots


/* <li>
<Link to="/discordbots"><h3>Discord Bots</h3></Link>
</li>
<li>
<Link to="/twitchbots"><h3>Twitch Bots</h3></Link>
</li> */

/* <Route path="/discordbots/" component={DiscordBots} />
<Route path="/twitchbots/" component={TwitchBots} /> */