import React, {Component} from 'react';

const INITIAL_STATE = {
    isFetching: false,
    data: {},
    error: null
  }
  
  export default class Info extends Component {
    state = { ...INITIAL_STATE }
    componentDidMount () {
      this.fetchData()
    }
    fetchData () {
      this.setState({ ...INITIAL_STATE, isFetching: true })
      if(!INITIAL_STATE.isFetching){
        fetch('http://www.zematoxic.com/botinfo')
        .then((data) => data.json())
        .then((data) => this.setState({ ...INITIAL_STATE, data }))
        .catch((error) => this.setState({ ...INITIAL_STATE, error }))
      }
    }
    render () {
      const {
        isFetching,
        data,
        error
      } = this.state
      console.log(data)
      return (
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
      )
    }
  }