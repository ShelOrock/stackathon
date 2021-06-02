import { SET_LABELS, RESET_LABELS } from './constants';

import { ActionFunctionType } from '../../types';

export const setLabels: ActionFunctionType<boolean> = boolean => ({
  type: SET_LABELS,
  payload: boolean 
})

export const resetLabels: ActionFunctionType<boolean> = () => ({ type: RESET_LABELS })