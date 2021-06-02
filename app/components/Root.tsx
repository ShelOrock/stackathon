import * as React from 'react';
const { useEffect } = React;
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './Home';
import Scene from './Scene/Scene';

import * as reduxActions from '../redux/actions';
const {
  floorActions: { resetFloors },
  currentFloorActions: { resetCurrentFloor }
} = reduxActions

export default () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFloors());
    dispatch(resetCurrentFloor());
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/3D' component={ Scene } />
      </Switch>
    </Router>
  );
};
