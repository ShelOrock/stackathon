import { SET_HUD, RESET_HUD } from './constants';

import { StateType, ReducerFunctionType } from '../../types';

const initialState: StateType<boolean> = true as boolean;

export const toggleHUD: ReducerFunctionType<typeof initialState, boolean> = (state = initialState, action) => {
  switch(action.type) {
    case SET_HUD:
      return action.payload;

    case RESET_HUD:
      return true;

    default:
      return state;
  };
};