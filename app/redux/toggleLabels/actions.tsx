import ToggleLabelActionTypes from './constants';

import { ActionFunctionType } from '../../types';

export const setLabels: ActionFunctionType<boolean> = boolean => ({
  type: ToggleLabelActionTypes.SET_LABELS,
  payload: boolean 
})

export const resetLabels: ActionFunctionType<boolean> = () => ({ type: ToggleLabelActionTypes.RESET_LABELS })