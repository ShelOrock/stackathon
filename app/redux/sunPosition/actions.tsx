import { SET_SUN_POSITION, RESET_SUN_POSITION } from './constants';

import { ActionFunctionType } from '../../types';

export const setSunPosition: ActionFunctionType<string> = payload => ({
  type: SET_SUN_POSITION,
  payload
});

export const resetSunPosition: ActionFunctionType<string> = () => ({ type: RESET_SUN_POSITION })