import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions/user.actions';
const INITIAL_STATE = {
    isFetching: false,
    data: {},
    error: null
  }
  
class HomePage extends React.Component {
    componentDidMount() {
      this.fetchData()
      this.props.dispatch(userActions.getAll());
    }

state = { ...INITIAL_STATE }
    fetchData () {
      this.setState({ ...INITIAL_STATE, isFetching: true })
      if(!INITIAL_STATE.isFetching){
        fetch('https://api.zematoxic.com/bots/botinfo')
        .then((data) => data.json())
        .then((data) => this.setState({ ...INITIAL_STATE, data }))
        .catch((error) => this.setState({ ...INITIAL_STATE, error }))
      }
    }
    render() {
        const {
            isFetching,
            data,
            error
          } = this.state
        const { user, users } = this.props;
        return (
            <div className="content">
                <div className="loggedIn">
                    <h1>Hi {user.firstName}!</h1>
                    <p>You're logged in with React & JWT!!</p>
                    <h3>Users from secure api end point:</h3>
                    {users.loading && <em>Loading users...</em>}
                    {users.error && <span className="text-danger">ERROR: {users.error.message}</span>}
                    {users.items &&
                        <ul>
                            {users.items.map((user, index) =>
                                <li key={user.id}>
                                    {user.firstName + ' ' + user.lastName}
                                </li>
                            )}
                        </ul>
                    }
                    <button className="btn btn-primary"><Link to="/login">Logout</Link></button>   
                </div>
                <div className="bot-info-container">
          {
            isFetching
              ? (<p>Loading...</p>)
              : error
                ? (<p>ERROR: {error.message}</p>)
                : Object.keys(data).map((key, i) => (
                  <div className="info-key" key={i}>
                    {`${key} - ${data[key]}`}
                  </div>
                ))
              }
        </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };