import { SET_CANVAS_SIZE, RESET_CANVAS_SIZE } from './constants';

import { ReducerFunctionType, StateType } from '../../types';

const initialState: StateType<number> = 600;

export const canvasSize: ReducerFunctionType<typeof initialState, number> = (state = initialState, action) => {
  switch(action.type) {
    case SET_CANVAS_SIZE:
      return action.payload;

    case RESET_CANVAS_SIZE:
      return initialState;

    default: 
      return state;
  };
};