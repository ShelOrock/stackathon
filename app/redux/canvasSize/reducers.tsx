import canvasSizeActionTypes from './constants';

import { ReducerFunctionType, StateType } from '../../types';

const initialState: StateType<number> = 600;

export const canvasSize: ReducerFunctionType<typeof initialState, number, number> = (state = initialState, action) => {
  switch(action.type) {
    case canvasSizeActionTypes.SET_CANVAS_SIZE:
      return action.payload;

    case canvasSizeActionTypes.RESET_CANVAS_SIZE:
      return initialState;

    default: 
      return state;
  };
};