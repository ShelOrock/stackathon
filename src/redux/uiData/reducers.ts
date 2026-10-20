import { combineReducers } from "@reduxjs/toolkit";
import { canvasReducers } from "./canvasSize";
import { showLabelsReducers } from "./showLabels";

export default combineReducers({
  canvas: canvasReducers,
  showLabels: showLabelsReducers
});
