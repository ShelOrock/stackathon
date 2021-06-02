import { SET_CANVAS_SIZE, RESET_CANVAS_SIZE } from './constants';

import { ActionFunctionType } from '../../types'

export const setCanvasSize: ActionFunctionType<number> = payload => ({
  type: SET_CANVAS_SIZE,
  payload
});

export const resetCanvasSize: ActionFunctionType<number> = payload => ({ type: RESET_CANVAS_SIZE });