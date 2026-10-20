import { combineReducers } from "redux";

import appData from "./appData/reducers";
import uiData from "./uiData/reducers";
import sceneData from "./sceneData/reducers";

export default combineReducers({
  appData,
  uiData,
  sceneData
});
