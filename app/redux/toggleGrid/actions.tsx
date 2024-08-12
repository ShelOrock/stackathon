import gridActionTypes from './constants';

import { ReduxTypes } from '../../types';

export const setGrid: ReduxTypes.ActionTypes.UnknownActionFunctionType<boolean> = payload => ({
  type: gridActionTypes.SET_GRID,
  payload
});

export const resetGrid: ReduxTypes.ActionTypes.UnknownActionFunctionType<boolean> = () => ({ type: gridActionTypes.RESET_GRID });