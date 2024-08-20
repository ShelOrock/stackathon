import { combineReducers } from 'redux';

import { canvasSize } from './canvasSize/reducers';
import { sunPosition } from './sunPosition/reducers';

import appData from "./entities/reducers";
import toggleElements from "./toggleElements/reducers" 

export default combineReducers({
  appData,
  canvasSize,
  sunPosition,

  toggleElements
});
