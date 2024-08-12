import gridActionTypes from './constants';

import { ReduxTypes } from '../../types';

const initialState: ReduxTypes.StateType<boolean> = true;

export const toggleGrid: ReduxTypes.ReducerFunctionType<typeof initialState, boolean, boolean> = (state = initialState, action) => {
  switch(action.type) {
    case gridActionTypes.SET_GRID:
      return action.payload;

    case gridActionTypes.RESET_GRID:
      return initialState;

    default:
      return state; 
  };
}