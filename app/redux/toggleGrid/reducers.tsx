import gridActionTypes from './constants';

import { ReducerFunctionType, StateType } from '../../types';

const initialState: StateType<boolean> = true as boolean;

export const toggleGrid: ReducerFunctionType<typeof initialState, boolean, boolean> = (state = initialState, action) => {
  switch(action.type) {
    case gridActionTypes.SET_GRID:
      return action.payload;

    case gridActionTypes.RESET_GRID:
      return initialState;

    default:
      return state; 
  };
}