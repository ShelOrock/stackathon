import StoreActionTypes from "./constants";

import { ReduxTypes } from "../../types";

export const resetStore: ReduxTypes.ActionTypes.UnknownActionFunctionType = () => ({ type: StoreActionTypes.RESET_STORE });
 