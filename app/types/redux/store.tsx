import AppReducer from "../../redux";
import store from "../../redux/store";

type RootState = ReturnType<typeof AppReducer>

type AppDispatchType = typeof store.dispatch;

export {
  RootState,
  AppDispatchType
};
