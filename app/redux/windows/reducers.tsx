import {
    CREATE_WINDOW,
    DELETE_WINDOW,
    UPDATE_WINDOW,
    RESET_WINDOWS
} from './constants';

import {
  WindowTypes,
  WindowsType,
  StateType,
  ReducerFunctionType
} from '../../types';

const initialState: StateType<WindowsType> = [] as WindowsType;

export const windows: ReducerFunctionType<typeof initialState, WindowTypes> = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_WINDOW:
      return [ ...state, action.payload ];

    case UPDATE_WINDOW:
      const windowToUpdate = state.findIndex(window => window.index === action.payload.index);
      return [
        ...state.slice(0, windowToUpdate),
        { ...state[windowToUpdate], ...action.payload },
        ...state.slice(windowToUpdate + 1)
      ];
    
    case DELETE_WINDOW: 
      return state.filter(window => window.index !== action.payload.index);

    case RESET_WINDOWS:
      return [] as WindowsType;

    default:
      return state;
  };
};