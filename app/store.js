import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './redux/index';

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(createLogger({ collapsed: true })))
)