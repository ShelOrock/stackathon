import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import * as Views from "../views";
import Scene from "../components/Scene/Scene";
import { resetActiveId, resetEntities } from "../redux/entities/actions";
import { AppData } from "../enums";

const AppRouter = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetEntities(AppData.Floors));
    dispatch(resetActiveId(AppData.Floors));
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
