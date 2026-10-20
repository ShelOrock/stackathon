import StoreActionTypes from "./constants";

import { Actions } from "../appData";

export const resetStore: Actions.ActionCreator<void, StoreActionTypes> = () => ({ type: StoreActionTypes.RESET_STORE });
 