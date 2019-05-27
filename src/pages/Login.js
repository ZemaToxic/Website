import React, {Component} from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends Component {

    render() {
            const { alert } = this.props;
            return (
                <div className="LoginBox">
                    <div className="LoginFields">
                        <div className="col-sm-8 col-sm-offset-2">
                            {alert.message &&
                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                            }
                        </div>
                    </div>
                </div>
            );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}


const connectedApp = connect(mapStateToProps)(Login);
export { connectedApp as Login };