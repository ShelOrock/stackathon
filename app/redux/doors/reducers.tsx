import {
  CREATE_DOOR,
  DELETE_DOOR,
  UPDATE_DOOR,
  RESET_DOORS
} from './constants';

import { 
  DoorTypes,
  DoorsType,
  StateType,
  ReducerFunctionType
} from '../../types';

const initialState: StateType<DoorsType> = [] as DoorsType;

export const doors: ReducerFunctionType<typeof initialState, DoorTypes> = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_DOOR:
      return [ ...state, action.payload ];

    case UPDATE_DOOR:
      const doorToUpdate = state.findIndex(door => door.index === action.payload.index);
      return [
        ...state.slice(0, doorToUpdate),
        { ...state[doorToUpdate], ...action.payload },
        ...state.slice(doorToUpdate + 1)
      ];

    case DELETE_DOOR:
      return state.filter(door => door.index !== action.payload.index);

    case RESET_DOORS:
      return [] as DoorsType;
    
    default:
      return state;
  };
};
