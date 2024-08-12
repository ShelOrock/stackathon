import FloorsActionTypes from './constants';

import {
  FloorTypes,
  FloorsType,
  StateType,
  ReducerFunctionType
} from '../../types';

const initialFloor: FloorTypes = {
  index: 0,
  label: `Floor 1`,
  isHighlighted: false,
  isHidden: false
};

const initialState: StateType<FloorsType> = [initialFloor] as FloorsType;

export const floors: ReducerFunctionType<typeof initialState, FloorTypes[], FloorTypes> = (state = initialState, action) => {
  switch(action.type) {
    case FloorsActionTypes.CREATE_FLOOR:
      return [ ...state, action.payload ];

    case FloorsActionTypes.UPDATE_FLOOR:
      const floorToUpdate = state.findIndex(floor => floor.index == action.payload.index);
      return [
        ...state.slice(0, floorToUpdate),
        { ...state[floorToUpdate], ...action.payload },
        ...state.slice(floorToUpdate + 1)
      ];

    case FloorsActionTypes.DELETE_FLOOR:
      return state.filter(floor => floor.index !== action.payload.index);

    case FloorsActionTypes.RESET_FLOORS:
      return [ initialFloor ] as FloorsType;

    default:
      return state;
  };
};