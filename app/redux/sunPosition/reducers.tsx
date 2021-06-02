import { SET_SUN_POSITION, RESET_SUN_POSITION } from './constants';

import { StateType, ReducerFunctionType } from '../../types';

const initialState: StateType<string> = '0';

export const sunPosition: ReducerFunctionType<typeof initialState, string> = (state = initialState, action) => {
  switch(action.type) {
    case SET_SUN_POSITION:
      return action.payload;

    case RESET_SUN_POSITION:
      return '0';

    default:
      return state;
  };
};