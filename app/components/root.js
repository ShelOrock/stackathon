import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Scene from './Scene';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Scene path='/3D' component={Scene} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
