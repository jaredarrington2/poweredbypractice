import React, {Component} from 'react';

export default class Home extends Component {

  // attendanceClick() => {
  //   console.log('Button has been clicked')
  // }

  render() {
    return(
      <div className="container" id="intro">
        <div className="row">
          <div className="col">
            <a className="waves-effect waves-light btn-large">Attendance</a>
          </div>
          <div className="col">
            <a className="waves-effect waves-light btn-large">Schedules</a>
          </div>
        </div>
      </div>
    )
  }
}
