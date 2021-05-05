import { combineReducers } from 'redux';

import { elements } from './rooms/reducers'
import { doors } from './doors/reducers';
import { windows } from './windows/reducers';

export default combineReducers({
  elements,
  doors,
  windows,
});

