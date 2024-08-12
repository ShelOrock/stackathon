import ToggleLabelActionTypes from './constants';

import { ReduxTypes } from '../../types';

export const setLabels: ReduxTypes.ActionTypes.UnknownActionFunctionType<boolean> = boolean => ({
  type: ToggleLabelActionTypes.SET_LABELS,
  payload: boolean 
})

export const resetLabels: ReduxTypes.ActionTypes.UnknownActionFunctionType<boolean> = () => ({ type: ToggleLabelActionTypes.RESET_LABELS })