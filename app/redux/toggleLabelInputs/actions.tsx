import ToggleLabelInputActionTypes from './constants';

import { ReduxTypes } from '../../types';

export const setLabelInputs: ReduxTypes.ActionTypes.UnknownActionFunctionType<boolean> = payload => ({
  type: ToggleLabelInputActionTypes.SET_LABEL_INPUTS,
  payload
});

export const resetLabelInputs: ReduxTypes.ActionTypes.UnknownActionFunctionType<boolean> = () => ({ type: ToggleLabelInputActionTypes.RESET_LABEL_INPUTS });