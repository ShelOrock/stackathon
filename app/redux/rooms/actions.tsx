import RoomActionTypes from './constants';

import { RoomTypes, ActionFunctionType } from '../../types';

export const createRoom: ActionFunctionType<RoomTypes> = room => ({
  type: RoomActionTypes.CREATE_ROOM,
  payload: room,
});

export const updateRoom: ActionFunctionType<RoomTypes> = room => ({
  type: RoomActionTypes.UPDATE_ROOM,
  payload: room
});

export const deleteRoom: ActionFunctionType<RoomTypes> = room => ({
  type: RoomActionTypes.DELETE_ROOM,
  payload: room
});

export const resetRooms: ActionFunctionType<RoomTypes> = () => ({ type: RoomActionTypes.RESET_ROOMS })
