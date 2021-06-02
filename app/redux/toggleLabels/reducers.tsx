import { SET_LABELS, RESET_LABELS } from './constants';

import { StateType, ReducerFunctionType } from '../../types';

const initialState: StateType<boolean> = true as boolean;

export const toggleLabels: ReducerFunctionType<typeof initialState, boolean> = (state = initialState, action) => {
  switch(action.type) {
    case SET_LABELS:
      return action.payload as boolean;

    case RESET_LABELS:
      return true;

    default:
      return state;
  };
};