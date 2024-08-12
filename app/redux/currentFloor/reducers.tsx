import CurrentFloorActionTypes from './constants';

import {
  FloorTypes,
  ReduxTypes
} from '../../types';

const initialFloor: FloorTypes = {
  index: 0,
  label: `Floor 1`,
  isHighlighted: false,
  isHidden: false
};

const initialState: ReduxTypes.StateType<FloorTypes> = initialFloor as FloorTypes;

export const currentFloor: ReduxTypes.ReducerFunctionType<typeof initialState, FloorTypes> = (state = initialState, action) => {
  switch(action.type) {
    case CurrentFloorActionTypes.SET_CURRENT_FLOOR:
      return action.payload;

    case CurrentFloorActionTypes.RESET_CURRENT_FLOOR:
      return initialFloor as FloorTypes;

    default:
      return state;
  };
};