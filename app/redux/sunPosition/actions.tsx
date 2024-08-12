import SunPositionActionTypes from './constants';

import { ActionFunctionType } from '../../types';

export const setSunPosition: ActionFunctionType<string> = payload => ({
  type: SunPositionActionTypes.SET_SUN_POSITION,
  payload
});

export const resetSunPosition: ActionFunctionType<string> = () => ({ type: SunPositionActionTypes.RESET_SUN_POSITION })