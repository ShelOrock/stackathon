import StoreActionTypes from './constants';
import appReducer from '..';

import { ReducerFunctionType, RootState } from '../../types';

const rootReducer: ReducerFunctionType<RootState, RootState> = (state = undefined, action) => {
  switch (action.type) {
    case StoreActionTypes.RESET_STORE:
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
