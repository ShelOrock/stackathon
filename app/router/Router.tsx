import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import * as Views from "../views";
import Scene from "../components/Scene/Scene";

import * as reduxActions from "../redux/actions";
const {
  floorActions: { resetFloors },
  currentFloorActions: { resetCurrentFloor }
} = reduxActions

const AppRouter = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetFloors());
    dispatch(resetCurrentFloor());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Views.Planner /> } />
        <Route path="/Planner" element={ <Views.Planner /> } />
        <Route path="/3D" element={ <Scene /> } />
      </Routes>
    </Router>
  );
};

export default AppRouter;
