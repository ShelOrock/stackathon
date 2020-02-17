import { combineReducers } from 'redux';

import { elements } from './rooms/reducers'
import { doors } from './doors/reducers';
import { windows } from './windows/reducers';
import { RESET_STORE } from './constants';

const appReducer = combineReducers({
    elements,
    doors,
    windows,
});

export default (state, action) => {
    switch(action.type) {
        case RESET_STORE:
            state = undefined
            return appReducer(state, action)
    }

    return appReducer(state, action);
}