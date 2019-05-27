import React, {Component} from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import { history } from '../_helpers';
import { PrivateRoute } from '../_components/PrivateRoute';
import { HomePage } from '../HomePage/HomePage';
import { LoginPage } from '../LoginPage/LoginPage';
import { alertActions } from '../_actions/';
class Login extends Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }
    render() {
            const { alert } = this.props;
            return (
                <div className="LoginBox">
                    <div className="LoginFields">
                        <div className="col-sm-8 col-sm-offset-2">
                            {alert.message &&
                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                            }
                            <Router history={history}>
                                <div>
                                    <PrivateRoute exact path="/homepage" component={HomePage} />
                                    <Route path="/login/loginpage" component={LoginPage} />
                                </div>
                            </Router>
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