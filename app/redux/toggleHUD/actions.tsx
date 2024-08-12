import ToggleHUDActionTypes from './constants';

import { ReduxTypes } from '../../types';

export const setHUD: ReduxTypes.ActionTypes.UnknownActionFunctionType<boolean> = boolean => ({
  type: ToggleHUDActionTypes.SET_HUD,
  payload: boolean
});

export const resetHUD: ReduxTypes.ActionTypes.UnknownActionFunctionType<boolean> = () => ({ type: ToggleHUDActionTypes.RESET_HUD });