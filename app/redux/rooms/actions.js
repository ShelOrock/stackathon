import {
  CREATE_ELEMENT,
  DELETE_ELEMENT,
  UPDATE_ELEMENT,
} from './constants';
import store from '../../store'

export const createElement = element => {
  const elements = store.getState().elements;
  const idx = elements.length
    ? elements[elements.length - 1].idx + 1
    : 0
  return {
    type: CREATE_ELEMENT,
    element: {idx, ...element},
  };
};

export const deleteElement = idx => ({
  type: DELETE_ELEMENT,
  idx,
});

export const updateElement = (idx, updatedElement) => ({
  type: UPDATE_ELEMENT,
  element: { idx, ...updatedElement }
});
