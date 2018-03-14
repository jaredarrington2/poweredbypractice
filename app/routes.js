import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Attendance from "./components/Attendance";


export default (
  	<Switch>
    	<Route exact path="/" component={Home} />
      <Route path="/attendance" component={Attendance} />
    </Switch>
);
