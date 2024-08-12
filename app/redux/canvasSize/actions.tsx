import canvasSizeActionTypes from './constants';

import { ReduxTypes } from '../../types'

export const setCanvasSize: ReduxTypes.ActionTypes.UnknownActionFunctionType<number> = payload => ({
  type: canvasSizeActionTypes.SET_CANVAS_SIZE,
  payload
});

export const resetCanvasSize: ReduxTypes.ActionTypes.UnknownActionFunctionType<number> = () => ({ type: canvasSizeActionTypes.RESET_CANVAS_SIZE });