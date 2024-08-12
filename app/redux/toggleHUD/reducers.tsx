import ToggleHUDActionTypes from './constants';

import { StateType, ReducerFunctionType } from '../../types';

const initialState: StateType<boolean> = true as boolean;

export const toggleHUD: ReducerFunctionType<typeof initialState, boolean, boolean> = (state = initialState, action) => {
  switch(action.type) {
    case ToggleHUDActionTypes.SET_HUD:
      return action.payload;

    case ToggleHUDActionTypes.RESET_HUD:
      return true;

    default:
      return state;
  };
};