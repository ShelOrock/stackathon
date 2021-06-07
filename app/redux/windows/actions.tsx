import {
    CREATE_WINDOW,
    UPDATE_WINDOW,
    DELETE_WINDOW,
    RESET_WINDOWS
} from './constants';

import { WindowTypes, ActionFunctionType } from '../../types';

export const createWindow: ActionFunctionType<WindowTypes> = payload => ({
  type: CREATE_WINDOW,
  payload
})

export const updateWindow: ActionFunctionType<WindowTypes> = payload => ({
  type: UPDATE_WINDOW,
  payload
});

export const deleteWindow: ActionFunctionType<WindowTypes> = payload => ({
  type: DELETE_WINDOW,
  payload
});

export const resetWindows: ActionFunctionType<WindowTypes> = () => ({ type: RESET_WINDOWS });
