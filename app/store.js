import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './redux/index';

let middleware = [];
if (process.env.NODE_ENV !== 'production') {
  middleware = [ ...middleware, createLogger({ collapsed: true }) ]
}

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
