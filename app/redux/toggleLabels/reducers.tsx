import ToggleLabelActionTypes from './constants';

import { StateType, ReducerFunctionType } from '../../types';

const initialState: StateType<boolean> = true as boolean;

export const toggleLabels: ReducerFunctionType<typeof initialState, boolean, boolean> = (state = initialState, action) => {
  switch(action.type) {
    case ToggleLabelActionTypes.SET_LABELS:
      return action.payload;

    case ToggleLabelActionTypes.RESET_LABELS:
      return true;

    default:
      return state;
  };
};