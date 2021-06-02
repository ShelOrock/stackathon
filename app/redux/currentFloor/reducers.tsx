import { SET_CURRENT_FLOOR, RESET_CURRENT_FLOOR } from './constants';

import {
  FloorTypes,
  StateType,
  ReducerFunctionType
} from '../../types';

const initialFloor: FloorTypes = {
  index: 0,
  label: `Floor 1`,
  isHighlighted: false,
  isHidden: false
};

const initialState: StateType<FloorTypes> = initialFloor as FloorTypes;

export const currentFloor: ReducerFunctionType<typeof initialState, FloorTypes> = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_FLOOR:
      return action.payload;

    case RESET_CURRENT_FLOOR:
      return initialFloor as FloorTypes;

    default:
      return state;
  };
};