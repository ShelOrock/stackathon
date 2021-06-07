import {
  CREATE_DOOR,
  UPDATE_DOOR,
  DELETE_DOOR,
  RESET_DOORS
} from './constants';

import { DoorTypes, ActionFunctionType } from '../../types';

export const createDoor: ActionFunctionType<DoorTypes> = payload => ({
  type: CREATE_DOOR,
  payload
});

export const updateDoor: ActionFunctionType<DoorTypes> = payload => ({
  type: UPDATE_DOOR,
  payload
});

export const deleteDoor: ActionFunctionType<DoorTypes> = payload => ({
  type: DELETE_DOOR,
  payload
});

export const resetDoors: ActionFunctionType<DoorTypes> = () => ({ type: RESET_DOORS });
