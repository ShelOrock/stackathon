import canvasSizeActionTypes from './constants';

import { ReduxTypes } from '../../types';

const initialState: ReduxTypes.StateType<number> = 600;

export const canvasSize: ReduxTypes.ReducerFunctionType<typeof initialState, number, number> = (state = initialState, action) => {
  switch(action.type) {
    case canvasSizeActionTypes.SET_CANVAS_SIZE:
      return action.payload;

    case canvasSizeActionTypes.RESET_CANVAS_SIZE:
      return initialState;

    default: 
      return state;
  };
};