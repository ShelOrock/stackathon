import StoreActionTypes from "./constants";
import appReducer from "..";

import { Reducers } from "../appData";
import { ReduxTypes } from "../../types";

const rootReducer: Reducers.Reducer<ReduxTypes.StoreTypes.RootState, ReduxTypes.StoreTypes.RootState> = (state = undefined, action) => {
  switch (action.type) {
    case StoreActionTypes.RESET_STORE:
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
