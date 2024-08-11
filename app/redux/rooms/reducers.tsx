import RoomActionTypes from './constants';

import {
  RoomTypes,
  RoomsType,
  StateType,
  ReducerFunctionType
} from '../../types';

const initialState: StateType<RoomsType> = [] as RoomsType;

export const rooms: ReducerFunctionType<typeof initialState, RoomTypes[], RoomTypes> = (state = initialState, action) => {
  switch (action.type) {
    case RoomActionTypes.CREATE_ROOM:
      return [ ...state, action.payload ];

    case RoomActionTypes.UPDATE_ROOM:
      const roomToUpdate = state.findIndex(room => room.index === action.payload.index);
      return [
        ...state.slice(0, roomToUpdate),
        { ...state[roomToUpdate], ...action.payload },
        ...state.slice(roomToUpdate + 1)
      ];

    case RoomActionTypes.DELETE_ROOM:
      return state.filter(room => room.index !== action.payload.index);

    case RoomActionTypes.RESET_ROOMS:
      return [] as RoomsType;

    default:
      return state;
  };
};
