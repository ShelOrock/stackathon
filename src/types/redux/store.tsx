import AppReducer from "../../redux";
import store from "../../redux/store";

type RootState = ReturnType<typeof AppReducer> | undefined;

type AppDispatchType = typeof store.dispatch;

export {
  RootState,
  AppDispatchType
};
