import { combineReducers } from 'redux';

import { canvasSize } from './canvasSize/reducers';
import { rooms } from './rooms/reducers'
import { doors } from './doors/reducers';
import { windows } from './windows/reducers';
import { floors } from './floors/reducers';
import { currentFloor } from './currentFloor/reducers';
import { sunPosition } from './sunPosition/reducers';

import toggleElements from "./toggleElements/reducers" 

export default combineReducers({
  canvasSize,
  rooms,
  doors,
  windows,
  floors,
  currentFloor,
  sunPosition,
  toggleElements
});
