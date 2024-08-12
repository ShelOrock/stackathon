import ToggleHUDActionTypes from './constants';

import { ActionFunctionType } from '../../types';

export const setHUD: ActionFunctionType<boolean> = boolean => ({
  type: ToggleHUDActionTypes.SET_HUD,
  payload: boolean
});

export const resetHUD: ActionFunctionType<boolean> = () => ({ type: ToggleHUDActionTypes.RESET_HUD });