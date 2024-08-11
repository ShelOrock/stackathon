import canvasSizeActionTypes from './constants';

import { ActionFunctionType } from '../../types'

export const setCanvasSize: ActionFunctionType<number> = payload => ({
  type: canvasSizeActionTypes.SET_CANVAS_SIZE,
  payload
});

export const resetCanvasSize: ActionFunctionType<number> = () => ({ type: canvasSizeActionTypes.RESET_CANVAS_SIZE });