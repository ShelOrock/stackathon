import WindowsActionTypes from './constants';

import { WindowTypes, ReduxTypes } from '../../types';

export const createWindow: ReduxTypes.ActionTypes.UnknownActionFunctionType<WindowTypes> = payload => ({
  type: WindowsActionTypes.CREATE_WINDOW,
  payload
});

export const deleteWindow: ReduxTypes.ActionTypes.UnknownActionFunctionType<number> = payload => ({
  type: WindowsActionTypes.DELETE_WINDOW,
  payload
});

export const resetWindows: ReduxTypes.ActionTypes.UnknownActionFunctionType<WindowTypes> = () => ({ type: WindowsActionTypes.RESET_WINDOWS });
