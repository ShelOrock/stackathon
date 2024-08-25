import canvasSizeActionTypes from "./constants";

import { ReduxTypes } from "../../types"

const setCanvasSize: ReduxTypes.ActionTypes.UnknownActionFunctionType<number> = payload => ({
  type: canvasSizeActionTypes.SET_CANVAS_SIZE,
  payload
});

const resetCanvasSize: ReduxTypes.ActionTypes.UnknownActionFunctionType<number> = () => ({ type: canvasSizeActionTypes.RESET_CANVAS_SIZE });

export {
  setCanvasSize,
  resetCanvasSize
};
