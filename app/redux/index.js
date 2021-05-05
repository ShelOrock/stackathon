import { combineReducers } from 'redux';

import { elements } from './rooms/reducers'
import { doors } from './doors/reducers';
import { windows } from './windows/reducers';

export const appReducer = combineReducers({
  elements,
  doors,
  windows,
});

