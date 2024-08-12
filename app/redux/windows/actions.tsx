import WindowsActionTypes from './constants';

import { WindowTypes, ActionFunctionType } from '../../types';

export const createWindow: ActionFunctionType<WindowTypes> = payload => ({
  type: WindowsActionTypes.CREATE_WINDOW,
  payload
})

export const updateWindow: ActionFunctionType<WindowTypes> = payload => ({
  type: WindowsActionTypes.UPDATE_WINDOW,
  payload
});

export const deleteWindow: ActionFunctionType<WindowTypes> = payload => ({
  type: WindowsActionTypes.DELETE_WINDOW,
  payload
});

export const resetWindows: ActionFunctionType<WindowTypes> = () => ({ type: WindowsActionTypes.RESET_WINDOWS });
