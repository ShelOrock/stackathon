import { RESET_STORE } from './constants';
import appReducer from '../index';


export const rootReducer = (state, action) => {
  switch (action.type) {
    case RESET_STORE:
      state = undefined
      return appReducer(state, action);
    default: return appReducer(state, action);
  }
};
