import {
    CREATE_WINDOW,
    UPDATE_WINDOW,
    DELETE_WINDOW
} from './constants';
import store from '../../store'

export const createWindow = window => {
  const windows = store.getState().windows;
  const idx = windows.length
    ? windows[windows.length - 1].idx + 1
    : 0;
  return {
    type: CREATE_WINDOW,
    window: {idx, ...window}
  };
};

export const updateWindow = (idx, updatedWindow) => {
    return {
        type: UPDATE_WINDOW,
        window: {idx, ...updatedWindow}
    }
}
