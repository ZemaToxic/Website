import React, {Component} from 'react';

const INITIAL_STATE = {
    isFetching: false,
    data: {},
    error: null
  }
  
  export default class DiscordBots extends Component {
    state = { ...INITIAL_STATE }
    componentDidMount () {
      this.fetchData()
    }
    fetchData () {
      this.setState({ ...INITIAL_STATE, isFetching: true })
      if(!INITIAL_STATE.isFetching){
        fetch('http://api.zematoxic.com/discord/commands')
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
        <div className="Bot-Commands-Container">
          <h1>Discord Bot commands</h1>
          {
            isFetching
              ? (<p>Loading...</p>)
              : error
                ? (<p>ERROR: {error.message}</p>)
                : Object.keys(data).map((key, i) => (
                    <div className="Commands">
                        <div className="CommandNameDiv">
                            {data[key].command}
                        </div>
                        <div className="CommandDescriptionDiv">
                            {data[key].description}
                        </div>
                    </div>
                    ))
                }
        </div>
      )
    }
  }