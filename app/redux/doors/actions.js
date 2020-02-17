import {
    CREATE_DOOR,
    UPDATE_DOOR,
    DELETE_DOOR
} from './constants';
import store from '../../store'

export const createDoor = door => {
  const doors = store.getState().doors;
  const idx = doors.length
    ? doors[doors.length - 1].idx + 1
    : 0;
  return {
    type: CREATE_DOOR,
    door: {idx, ...door}
  };
};

export const updateDoor = (idx, updatedDoor) => {
    return {
        type: UPDATE_DOOR,
        door: {idx, ...updatedDoor}
    }
}
