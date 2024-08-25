import SunPositionActionTypes from "./constants";

import { ReduxTypes } from "../../types";

const setSunPosition: ReduxTypes.ActionTypes.UnknownActionFunctionType<string> = payload => ({
  type: SunPositionActionTypes.SET_SUN_POSITION,
  payload
});

const resetSunPosition: ReduxTypes.ActionTypes.UnknownActionFunctionType<string> = () => ({ type: SunPositionActionTypes.RESET_SUN_POSITION });

export {
  setSunPosition,
  resetSunPosition
};
