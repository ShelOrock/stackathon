import StoreActionTypes from './constants';
import appReducer from '..';

import { ReduxTypes } from '../../types';

const rootReducer: ReduxTypes.ReducerFunctionType<ReduxTypes.RootState, ReduxTypes.RootState> = (state = undefined, action) => {
  switch (action.type) {
    case StoreActionTypes.RESET_STORE:
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
