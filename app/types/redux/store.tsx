import AppReducer from '../../redux';
import store from '../../redux/store';

export type RootState = ReturnType<typeof AppReducer>

export type AppDispatchType = typeof store.dispatch;
