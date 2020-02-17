import {
  CREATE_ELEMENT,
  DELETE_ELEMENT,
  UPDATE_ELEMENT,
} from './constants';
import store from '../../store';

export const elements = (state = [], action) => {
  switch (action.type) {
    case CREATE_ELEMENT:
      return [...state, action.element];

    // case DELETE_ELEMENT:
    //   return [
    //     ...state,
    //     store.getState().elements.filter
    //   ]

    case UPDATE_ELEMENT:
      const update = state.findIndex(element => {
        return element.idx === action.element.idx
      })
      return [
        ...state.slice(0, update),
        {
          ...state[update], ...action.element
        },
        ...state.slice(update + 1)
    ]

    default:
      return state;
  }
};
