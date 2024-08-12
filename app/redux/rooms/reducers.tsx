import RoomActionTypes from './constants';

import {
  RoomTypes,
  RoomsType,
  ReduxTypes
} from '../../types';

const initialState: ReduxTypes.StateType<RoomsType> = [] as RoomsType;

export const rooms: ReduxTypes.ReducerFunctionType<typeof initialState, RoomTypes[], RoomTypes> = (state = initialState, action) => {
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
