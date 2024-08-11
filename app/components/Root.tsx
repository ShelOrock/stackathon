import * as React from 'react';
const { useEffect } = React;
import { useAppDispatch } from "../hooks";
import {
  BrowserRouter as Router,
  Routes,
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

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetFloors());
    dispatch(resetCurrentFloor());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/3D' element={ <Scene /> } />
      </Routes>
    </Router>
  );
};
