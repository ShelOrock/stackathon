import { SET_LABEL_INPUTS, RESET_LABEL_INPUTS } from './constants';

import { ActionFunctionType } from '../../types';

export const setLabelInputs: ActionFunctionType<boolean> = payload => ({
  type: SET_LABEL_INPUTS,
  payload
});

export const resetLabelInputs: ActionFunctionType<boolean> = () => ({ type: RESET_LABEL_INPUTS });