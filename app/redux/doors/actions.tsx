import {
  CREATE_DOOR,
  UPDATE_DOOR,
  DELETE_DOOR,
  RESET_DOORS
} from './constants';

import { DoorTypes, ActionFunctionType } from '../../types';

export const createDoor: ActionFunctionType<DoorTypes> = door => ({
  type: CREATE_DOOR,
  payload: door
});

export const updateDoor: ActionFunctionType<DoorTypes> = door => ({
  type: UPDATE_DOOR,
  payload: door
});

export const deleteDoor: ActionFunctionType<DoorTypes> = door => ({
  type: DELETE_DOOR,
  payload: door
});

export const resetDoors: ActionFunctionType<DoorTypes> = () => ({ type: RESET_DOORS });
