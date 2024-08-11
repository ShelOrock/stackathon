import gridActionTypes from './constants';

import { ActionFunctionType } from '../../types';

export const setGrid: ActionFunctionType<boolean> = payload => ({
  type: gridActionTypes.SET_GRID,
  payload
});

export const resetGrid: ActionFunctionType<boolean> = () => ({ type: gridActionTypes.RESET_GRID });