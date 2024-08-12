import ToggleHUDActionTypes from './constants';

import { ReduxTypes } from '../../types';

const initialState: ReduxTypes.StateType<boolean> = true as boolean;

export const toggleHUD: ReduxTypes.ReducerFunctionType<typeof initialState, boolean, boolean> = (state = initialState, action) => {
  switch(action.type) {
    case ToggleHUDActionTypes.SET_HUD:
      return action.payload;

    case ToggleHUDActionTypes.RESET_HUD:
      return true;

    default:
      return state;
  };
};