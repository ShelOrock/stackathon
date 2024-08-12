import ToggleLabelInputActionTypes from './constants';

import { ActionFunctionType } from '../../types';

export const setLabelInputs: ActionFunctionType<boolean> = payload => ({
  type: ToggleLabelInputActionTypes.SET_LABEL_INPUTS,
  payload
});

export const resetLabelInputs: ActionFunctionType<boolean> = () => ({ type: ToggleLabelInputActionTypes.RESET_LABEL_INPUTS });