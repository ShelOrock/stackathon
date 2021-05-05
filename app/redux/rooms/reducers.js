import {
  CREATE_ELEMENT,
  UPDATE_ELEMENT,
} from './constants';

export const elements = (state = [], action) => {
  switch (action.type) {
    case CREATE_ELEMENT:
      return [...state, action.element];

    case UPDATE_ELEMENT:
      const update = state.findIndex(element => element.idx === action.element.idx)
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
