import { combineReducers } from 'redux';

import { canvasSize } from './canvasSize/reducers';
import { floors } from './floors/reducers';
import { currentFloor } from './currentFloor/reducers';
import { sunPosition } from './sunPosition/reducers';

import appData from "./entities/reducers";
import toggleElements from "./toggleElements/reducers" 

export default combineReducers({
  appData,
  canvasSize,
  floors,
  currentFloor,
  sunPosition,

  toggleElements
});
