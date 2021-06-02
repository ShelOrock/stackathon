import {
    CREATE_WINDOW,
    UPDATE_WINDOW,
    DELETE_WINDOW,
    RESET_WINDOWS
} from './constants';

import { WindowTypes, ActionFunctionType } from '../../types';

export const createWindow: ActionFunctionType<WindowTypes> = window => ({
  type: CREATE_WINDOW,
  payload: window
})

export const updateWindow: ActionFunctionType<WindowTypes> = window => ({
  type: UPDATE_WINDOW,
  payload: window
});

export const deleteWindow: ActionFunctionType<WindowTypes> = window => ({
  type: DELETE_WINDOW,
  payload: window
});

export const resetWindows: ActionFunctionType<WindowTypes> = () => ({ type: RESET_WINDOWS });
