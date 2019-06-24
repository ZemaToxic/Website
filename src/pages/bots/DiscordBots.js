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
        fetch('https://api.zematoxic.com/commands')
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
      return (
        <div className="Bot-Commands-Container">
          <h1>Discord Bot commands</h1>
          {
            isFetching ? (<p>Loading...</p>) : error ? (<p>ERROR: {error.message}</p>)
                : Object.keys(data).map((bot, key) => (
                  <div className="commands" key={key}>
                    <h2>{`Commands for ${bot}`}</h2>
                    {data[bot].map((command, key) => (
                      <div className="Commands">
                      <div className="CommandNameDiv" key={key}>
                        {`${command.name}`}
                      </div>
                      <div className="CommandDescriptionDiv" key={key}>
                        {`${command.description}`}
                      </div>
                      </div>
                    ))}
                  </div>
                ))
                }
        </div>
      )
    }
  }