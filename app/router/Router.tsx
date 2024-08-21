import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import * as Views from "../views";
import Scene from "../components/Scene/Scene";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={ <Views.Planner /> } />
      <Route path="/Planner" element={ <Views.Planner /> } />
      <Route path="/3D" element={ <Scene /> } />
    </Routes>
  </Router>
);

export default AppRouter;
