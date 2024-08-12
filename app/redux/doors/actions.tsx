import DoorsActionTypes from './constants';

import { DoorTypes, ActionFunctionType } from '../../types';

export const createDoor: ActionFunctionType<DoorTypes> = payload => ({
  type: DoorsActionTypes.CREATE_DOOR,
  payload
});

export const updateDoor: ActionFunctionType<DoorTypes> = payload => ({
  type: DoorsActionTypes.UPDATE_DOOR,
  payload
});

export const deleteDoor: ActionFunctionType<DoorTypes> = payload => ({
  type: DoorsActionTypes.DELETE_DOOR,
  payload
});

export const resetDoors: ActionFunctionType<DoorTypes> = () => ({ type: DoorsActionTypes.RESET_DOORS });
