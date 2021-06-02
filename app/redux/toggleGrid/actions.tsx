import { SET_GRID, RESET_GRID } from './constants';

import { ActionFunctionType } from '../../types';

export const setGrid: ActionFunctionType<boolean> = payload => ({
  type: SET_GRID,
  payload
});

export const resetGrid: ActionFunctionType<boolean> = () => ({ type: RESET_GRID });