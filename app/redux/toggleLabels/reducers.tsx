import ToggleLabelActionTypes from './constants';

import { ReduxTypes } from '../../types';

const initialState: ReduxTypes.StateType<boolean> = true as boolean;

export const toggleLabels: ReduxTypes.ReducerFunctionType<typeof initialState, boolean, boolean> = (state = initialState, action) => {
  switch(action.type) {
    case ToggleLabelActionTypes.SET_LABELS:
      return action.payload;

    case ToggleLabelActionTypes.RESET_LABELS:
      return true;

    default:
      return state;
  };
};