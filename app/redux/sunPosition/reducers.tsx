import SunPositionActionTypes from './constants';

import { ReduxTypes} from '../../types';

const initialState: ReduxTypes.StateType<string> = '0';

export const sunPosition: ReduxTypes.ReducerFunctionType<typeof initialState, string, string> = (state = initialState, action) => {
  switch(action.type) {
    case SunPositionActionTypes.SET_SUN_POSITION:
      return action.payload;

    case SunPositionActionTypes.RESET_SUN_POSITION:
      return '0';

    default:
      return state;
  };
};