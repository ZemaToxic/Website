import React, {Component} from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from '../_helpers';
import { PrivateRoute } from '../_components/PrivateRoute';
import { HomePage } from '../HomePage/HomePage';
import { LoginPage } from '../LoginPage/LoginPage';

class Login extends Component {
    render() {
            const { alert } = this.props;
            return (
                <div className="jumbotron">
                    <div className="container">
                        <div className="col-sm-8 col-sm-offset-2">
                            {alert.message &&
                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                            }
                            <Router history={history}>
                                <div>
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <Route path="/login/loginpage" component={LoginPage} />
                                </div>
                            </Router>
                        </div>
                    </div>
                </div>
            );
    }
}

export default Login