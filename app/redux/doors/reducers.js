import {
    CREATE_DOOR,
    DELETE_DOOR,
    UPDATE_DOOR,
} from './constants';

export const doors = (state = [], action) => {
    switch(action.type) {
        case CREATE_DOOR:
            return [...state, action.door]

        case DELETE_DOOR:
            return state;

        case UPDATE_DOOR:
            const update = state.findIndex(door => {
                return door.idx === action.door.idx
              })
              return [
                ...state.slice(0, update),
                {
                  ...state[update], ...action.door
                },
                ...state.slice(update + 1)
            ]
        default:
            return state;
    }
}
