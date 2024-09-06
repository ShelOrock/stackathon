import SelectedEntityActionTypes from "./constants";

import { ReduxTypes } from "../../types";
import { AppData } from "../../enums";

const initialState: ReduxTypes.ReducerTypes.StateType<AppData> = null;

const selectedEntity: ReduxTypes.ReducerTypes.ReducerFunctionType<typeof initialState, AppData, AppData> = (state = initialState, action) => {
  switch(action.type) {
    case SelectedEntityActionTypes.SET_SELECTED_ENTITY:
      return action.payload;

    case SelectedEntityActionTypes.RESET_SELECTED_ENTITY:
      return initialState;

    default:
      return state;
  };
};

export default selectedEntity;
