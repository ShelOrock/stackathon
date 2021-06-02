import {
  CREATE_ROOM,
  DELETE_ROOM,
  UPDATE_ROOM,
  RESET_ROOMS,
} from './constants';

import { RoomTypes, ActionFunctionType } from '../../types';

export const createRoom: ActionFunctionType<RoomTypes> = room => ({
  type: CREATE_ROOM,
  payload: room,
});

export const updateRoom: ActionFunctionType<RoomTypes> = room => ({
  type: UPDATE_ROOM,
  payload: room
});

export const deleteRoom: ActionFunctionType<RoomTypes> = room => ({
  type: DELETE_ROOM,
  payload: room
});

export const resetRooms: ActionFunctionType<RoomTypes> = () => ({ type: RESET_ROOMS })
