import { combineReducers } from "redux";

import appData from "./entities/reducers";
import toggleElements from "./toggleElements/reducers"

import canvasSize from "./canvasSize/reducers";
import sunPosition from "./sunPosition/reducers";
import selectedEntity from "./selectedEntity/reducers";

export default combineReducers({
  appData,
  toggleElements,
  canvasSize,
  sunPosition,
  selectedEntity
});
