import { ShowLabelsTypes } from ".";
import { UIStateActionTypes, UIStateTypes } from "..";
import { ReduxTypes } from "../.."


const setShowLabels: ShowLabelsTypes.ActionCreator<boolean> = (entityName, payload) => ({
  type: UIStateActionTypes.SET_UI_STATE,
  entityName,
  payload
});

const resetShowLabels: ReduxTypes.ActionCreator<UIStateTypes.ResetUIStateAction> = () => ({
  type: UIStateActionTypes.RESET_UI_STATE
});

export {
  setShowLabels,
  resetShowLabels
};
