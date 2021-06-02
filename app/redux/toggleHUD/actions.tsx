import { SET_HUD, RESET_HUD } from './constants';

import { ActionFunctionType } from '../../types';

export const setHUD: ActionFunctionType<boolean> = boolean => ({
  type: SET_HUD,
  payload: boolean
});

export const resetHUD: ActionFunctionType<boolean> = () => ({ type: RESET_HUD });