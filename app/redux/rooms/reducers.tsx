import {
  CREATE_ROOM,
  UPDATE_ROOM,
  DELETE_ROOM,
  RESET_ROOMS,
} from './constants';

import {
  RoomTypes,
  RoomsType,
  StateType,
  ReducerFunctionType
} from '../../types';

const initialState: StateType<RoomsType> = [] as RoomsType;

export const rooms: ReducerFunctionType<typeof initialState, RoomTypes> = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROOM:
      return [ ...state, action.payload ];

    case UPDATE_ROOM:
      const roomToUpdate = state.findIndex(room => room.index === action.payload.index);
      return [
        ...state.slice(0, roomToUpdate),
        { ...state[roomToUpdate], ...action.payload },
        ...state.slice(roomToUpdate + 1)
      ];

    case DELETE_ROOM:
      return state.filter(room => room.index !== action.payload.index);

    case RESET_ROOMS:
      return [] as RoomsType;

    default:
      return state;
  };
};
