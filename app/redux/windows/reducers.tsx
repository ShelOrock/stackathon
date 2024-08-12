import WindowsActionTypes from './constants';

import {
  WindowTypes,
  WindowsType,
  ReduxTypes
} from '../../types';

const initialState: ReduxTypes.StateType<WindowsType> = [] as WindowsType;

export const windows: ReduxTypes.ReducerFunctionType<typeof initialState, WindowTypes[], WindowTypes> = (state = initialState, action) => {
  switch(action.type) {
    case WindowsActionTypes.CREATE_WINDOW:
      return [ ...state, action.payload ];

    case WindowsActionTypes.UPDATE_WINDOW:
      const windowToUpdate = state.findIndex(window => window.index === action.payload.index);
      return [
        ...state.slice(0, windowToUpdate),
        { ...state[windowToUpdate], ...action.payload },
        ...state.slice(windowToUpdate + 1)
      ];
    
    case WindowsActionTypes.DELETE_WINDOW: 
      return state.filter(window => window.index !== action.payload.index);

    case WindowsActionTypes.RESET_WINDOWS:
      return [] as WindowsType;

    default:
      return state;
  };
};