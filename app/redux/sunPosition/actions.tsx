import SunPositionActionTypes from './constants';

import { ReduxTypes } from '../../types';

export const setSunPosition: ReduxTypes.ActionTypes.UnknownActionFunctionType<string> = payload => ({
  type: SunPositionActionTypes.SET_SUN_POSITION,
  payload
});

export const resetSunPosition: ReduxTypes.ActionTypes.UnknownActionFunctionType<string> = () => ({ type: SunPositionActionTypes.RESET_SUN_POSITION })