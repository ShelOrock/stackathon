import { combineReducers } from "@reduxjs/toolkit";
import { lightingReducers } from "./lighting";

export default combineReducers({
  lighting: lightingReducers
});
