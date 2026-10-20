import { CanvasStateTypes } from ".";
import { UIStateActionTypes, UIStateTypes } from "..";
import { ReduxTypes } from "../..";


const setCanvasSize: ReduxTypes.ActionCreator<UIStateTypes.SetUIStateAction<CanvasStateTypes.CanvasState>, CanvasStateTypes.CanvasState> = payload => ({
  type: UIStateActionTypes.SET_UI_STATE,
  payload
});

const resetCanvasSize: ReduxTypes.ActionCreator<UIStateTypes.ResetUIStateAction> = () => ({
  type: UIStateActionTypes.RESET_UI_STATE
});

export {
  setCanvasSize,
  resetCanvasSize
};
