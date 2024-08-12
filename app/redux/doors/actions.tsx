import DoorsActionTypes from './constants';

import { DoorTypes, ReduxTypes } from '../../types';

export const createDoor: ReduxTypes.ActionTypes.UnknownActionFunctionType<DoorTypes> = payload => ({
  type: DoorsActionTypes.CREATE_DOOR,
  payload
});

export const updateDoor: ReduxTypes.ActionTypes.UnknownActionFunctionType<DoorTypes> = payload => ({
  type: DoorsActionTypes.UPDATE_DOOR,
  payload
});

export const deleteDoor: ReduxTypes.ActionTypes.UnknownActionFunctionType<DoorTypes> = payload => ({
  type: DoorsActionTypes.DELETE_DOOR,
  payload
});

export const resetDoors: ReduxTypes.ActionTypes.UnknownActionFunctionType<DoorTypes> = () => ({ type: DoorsActionTypes.RESET_DOORS });
