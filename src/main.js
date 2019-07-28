import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './login.js';
import Devices from './devices.js';

const Main = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Login}/> 
      <Route path='/roster' component={Devices}/>
    </Switch>
  </Router>
)

export default Main;