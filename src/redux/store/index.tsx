import rootReducer from "./reducers";
import { Tuple, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(logger)
});

export default store; 
