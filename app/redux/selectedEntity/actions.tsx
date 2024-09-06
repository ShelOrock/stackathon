import SelectedEntityActionTypes from "./constants";

import { ReduxTypes } from "../../types";
import { AppData } from "../../enums";

const setSelectedEntity: ReduxTypes.ActionTypes.UnknownActionFunctionType<AppData> = payload => ({
  type: SelectedEntityActionTypes.SET_SELECTED_ENTITY,
  payload
});

const resetSelectEntity: ReduxTypes.ActionTypes.UnknownActionFunctionType<AppData> = () => ({ type: SelectedEntityActionTypes.RESET_SELECTED_ENTITY });

export {
  setSelectedEntity,
  resetSelectEntity
};
