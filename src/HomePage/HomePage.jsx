import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { authHeader } from '../_helpers/auth-header';
import { userActions } from '../_actions/user.actions';

const INITIAL_STATE = {
    isFetching: false,
    data: {},
    error: null
  }
  
class HomePage extends React.Component {
  state = { ...INITIAL_STATE }
    componentDidMount() {
      this.fetchData()
      this.props.dispatch(userActions.getAll());
      console.log(this.state)
      console.log(this.props)
    }

    fetchData () {
      this.setState({ ...INITIAL_STATE, isFetching: true })
      const requestOptions = {
        headers: authHeader()
    };
      if(!INITIAL_STATE.isFetching){
        fetch('https://api.zematoxic.com/bots/botinfo', requestOptions)
        .then((data) => data.json())
        .then((data) => this.setState({ ...INITIAL_STATE, data }))
        .catch((error) => this.setState({ ...INITIAL_STATE, error }))
      }
    }
    
    render() {
        const { user, users} = this.props;
        const {
          isFetching,
          data,
          error
        } = this.state
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
                    <button className="btn btn-primary"><Link to="/">Logout</Link></button>   
                </div>
                <div className="info-container">
                  { isFetching ? (<p>Loading...</p>) : error ? (<p>ERROR: {error.message}</p>)
                  : Object.keys(data).map((keys, i) => (
                  <div>
                    <h2>{`${keys}`}</h2>
                    {Object.keys(data[keys]).map((name, i) => (
                    <div className="InfoContainer">
                        <div className="DataInfo"> {name}:</div>
                        <div className="DataValue">  { data[keys][name] } </div>
                      </div>
                    ))}
                  </div>
                  ))}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication, isFetching, data, error } = state;
    const { user } = authentication;
    return {
        user,
        users,
        isFetching,
        data,
        error
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };