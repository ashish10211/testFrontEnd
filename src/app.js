import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link , withRouter  } from 'react-router-dom';
import Login from './login';
import Devices from './devices';


class App extends Component {
  render() {
    return (
<Router>
          <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/devices' component={Devices} />
          </Switch>     
      </Router>
    );
  }
}

export default App;