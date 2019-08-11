import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Dashboard.css'

class Dashboard extends Component {

    render() {
        return (
            <div className='Main'>
                <div className="SideBar">
                        <Link to="/dashboard"><h3>Home</h3></Link>
                        <hr size="1" color="#FFFFFF" width="100%"></hr>
                        <Link to="/dashboard/graphs"><h3>Graphs</h3></Link>
                        <hr size="1" color="#FFFFFF" width="100%"></hr>
                        <Link to="/dashboard/stats"><h3>Stats</h3></Link>
                        <hr size="1" color="#FFFFFF" width="100%"></hr>
                        <Link to="/dashboard/logs"><h3>Logs</h3></Link>
                        <hr size="1" color="#FFFFFF" width="100%"></hr>
                </div>
                <div className="DashContent">
                    <div className="DashTile">
                        <h3>CENTER TEXT</h3>
                    </div>
                    <div className="DashTile">
                        <h3>CENTER TEXT</h3>
                    </div>
                    <div className="DashTile">
                        <h3>CENTER TEXT</h3>
                    </div>
                    <div className="DashTile">
                        <h3>CENTER TEXT</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard