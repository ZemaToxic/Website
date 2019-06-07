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
        fetch('https://api.zematoxic.com/bots/commands')
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
                : Object.keys(data).map((key, i) => (
                  <div className="Commands">
                  {console.log(data)}
                        <div className="CommandNameDiv">
                            {data[0].commands[key].command}
                        </div>
                        <div className="CommandDescriptionDiv">
                            {data[0].commands[key].description}
                        </div>                 
                    </div>
                    
                    ))
                }
        </div>
      )
    }
  }