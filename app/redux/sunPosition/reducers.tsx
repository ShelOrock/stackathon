import SunPositionActionTypes from "./constants";

import { ReduxTypes} from "../../types";

const initialState: ReduxTypes.ReducerTypes.StateType<string> = "0";

const sunPosition: ReduxTypes.ReducerTypes.ReducerFunctionType<typeof initialState, string, string> = (state = initialState, action) => {
  switch(action.type) {
    case SunPositionActionTypes.SET_SUN_POSITION:
      return action.payload;

    case SunPositionActionTypes.RESET_SUN_POSITION:
      return "0";

    default:
      return state;
  };
};

export default sunPosition;
