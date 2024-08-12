import ToggleElementActionTypes from "./constants";

import { ReduxTypes } from "../../types";
import { combineReducers } from "@reduxjs/toolkit";
import UIDataEntities from "../../types/redux/entities";

const initialState: ReduxTypes.StateType<boolean> = true as boolean;
const toggleElementIntialState: ReduxTypes.StateType<{ isShowing: typeof initialState }> = { isShowing: initialState }

const toggleElements: ReduxTypes.ReducerFunctionType<typeof initialState, boolean, boolean> = (state = initialState, action) => {
  switch(action.type) {
    case ToggleElementActionTypes.SET_TOGGLE_ELEMENT:
      return action.payload;

    case ToggleElementActionTypes.RESET_TOGGLE_ELEMENT:
      return initialState;

    default:
      return state;
  };
};

const createToggleElementsReducer = entityName => (state = toggleElementIntialState, action) => {
  switch(action.entityName) {
    case `${ entityName }`:
      return { isShowing: toggleElements(state.isShowing, action) };

    default:
      return state;
  };
};

export default combineReducers({
  grid: createToggleElementsReducer(UIDataEntities.grid),
  elementLabels: createToggleElementsReducer(UIDataEntities.elementLabels),
  elementActions: createToggleElementsReducer(UIDataEntities.elementActions)
});
