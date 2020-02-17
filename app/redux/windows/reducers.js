import {
    CREATE_WINDOW,
    DELETE_WINDOW,
    UPDATE_WINDOW,
} from './constants';

export const windows = (state = [], action) => {
    switch(action.type) {
        case CREATE_WINDOW:
            return [...state, action.window]

        case DELETE_WINDOW:
            return state;

        case UPDATE_WINDOW:
            const update = state.findIndex(window => {
                return window.idx === action.window.idx
              })
              return [
                ...state.slice(0, update),
                {
                  ...state[update], ...action.window
                },
                ...state.slice(update + 1)
            ]
        default:
            return state;
    }
}