import { SET_LABEL_INPUTS, RESET_LABEL_INPUTS } from './constants';

import { ReducerFunctionType, StateType } from '../../types';

const initialState: StateType<boolean> = true as boolean;

export const toggleLabelInputs: ReducerFunctionType<typeof initialState, boolean> = (state = initialState, action) => {
  switch(action.type) {
    case SET_LABEL_INPUTS:
      return action.payload;

    case RESET_LABEL_INPUTS:
      return initialState;

    default:
      return state;
  };
}