import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        weather: undefined
      };
  }
  render() {
    return(
      <div>
        <form onSubmit={this.searchWeather.bind(this)}>
          <label>Player</label>
          <input type="text" ref="PlayerName"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
