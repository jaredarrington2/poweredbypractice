import React, {Component} from 'react';
import Start from './Start';
export default class Home extends Component {
  render() {

    return (
      <div className="container">
        <h1>Powered x Practice</h1>
        <h2>Practice like you plan</h2>
        <Start/>
      </div>

    );
  }
};
