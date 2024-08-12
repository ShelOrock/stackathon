import ToggleElementActionTypes from "./constants";

import { ReduxTypes } from "../../types"

const setToggleElement: ReduxTypes.ActionTypes.KnownActionFunctionType<boolean> = (entityName, payload) => ({
  entityName, 
  type: ToggleElementActionTypes.SET_TOGGLE_ELEMENT,
  payload
});

const resetToggleElement: ReduxTypes.ActionTypes.KnownActionFunctionType = entityName => ({
  entityName,
  type: ToggleElementActionTypes.RESET_TOGGLE_ELEMENT
});

export {
  setToggleElement,
  resetToggleElement
};
