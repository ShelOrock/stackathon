import RoomActionTypes from './constants';

import { ReduxTypes, RoomTypes } from '../../types';

export const createRoom: ReduxTypes.ActionTypes.UnknownActionFunctionType<RoomTypes> = room => ({
  type: RoomActionTypes.CREATE_ROOM,
  payload: room,
});

export const updateRoom: ReduxTypes.ActionTypes.UnknownActionFunctionType<RoomTypes> = room => ({
  type: RoomActionTypes.UPDATE_ROOM,
  payload: room
});

export const deleteRoom: ReduxTypes.ActionTypes.UnknownActionFunctionType<RoomTypes> = room => ({
  type: RoomActionTypes.DELETE_ROOM,
  payload: room
});

export const resetRooms: ReduxTypes.ActionTypes.UnknownActionFunctionType<RoomTypes> = () => ({ type: RoomActionTypes.RESET_ROOMS })
