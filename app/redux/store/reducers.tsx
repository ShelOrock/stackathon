import StoreActionTypes from "./constants";
import appReducer from "..";

import { ReduxTypes } from "../../types";

const rootReducer: ReduxTypes.ReducerTypes.ReducerFunctionType<ReduxTypes.StoreTypes.RootState, ReduxTypes.StoreTypes.RootState> = (state = undefined, action) => {
  switch (action.type) {
    case StoreActionTypes.RESET_STORE:
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
