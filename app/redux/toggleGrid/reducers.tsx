import { SET_GRID, RESET_GRID } from './constants';

import { ReducerFunctionType, StateType } from '../../types';

const initialState: StateType<boolean> = true as boolean;

export const toggleGrid: ReducerFunctionType<typeof initialState, boolean> = (state = initialState, action) => {
  switch(action.type) {
    case SET_GRID:
      return action.payload;

    case RESET_GRID:
      return initialState;

    default:
      return state; 
  };
}