import ToggleLabelInputActionTypes from './constants';

import { ReducerFunctionType, StateType } from '../../types';

const initialState: StateType<boolean> = true as boolean;

export const toggleLabelInputs: ReducerFunctionType<typeof initialState, boolean, boolean> = (state = initialState, action) => {
  switch(action.type) {
    case ToggleLabelInputActionTypes.SET_LABEL_INPUTS:
      return action.payload;

    case ToggleLabelInputActionTypes.RESET_LABEL_INPUTS:
      return initialState;

    default:
      return state;
  };
}