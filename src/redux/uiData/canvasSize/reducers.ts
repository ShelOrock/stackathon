import { CanvasStateTypes } from ".";
import { UIStateTypes, UIStateActionTypes } from "..";
import { ReduxTypes } from "../..";

const initialState: CanvasStateTypes.CanvasState = {
  width: 800,
  height: 800
};

const canvas: ReduxTypes.Reducer<CanvasStateTypes.CanvasState, UIStateTypes.UIStateActions<CanvasStateTypes.CanvasState>> = (state = initialState, action) => {
  switch(action.type) {
    case UIStateActionTypes.SET_UI_STATE:
      return action.payload;

    case UIStateActionTypes.RESET_UI_STATE:
      return state;
  };
};

export default canvas;
