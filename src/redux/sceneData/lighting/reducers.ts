import { LightingStateTypes } from ".";
import { SceneDataTypes, SceneDataActionTypes } from "..";
import { ReduxTypes } from "../..";

const initialState: LightingStateTypes.LightingState = {
  x: 50,
  y: 50,
  z: 50
};

const lighting: ReduxTypes.Reducer<LightingStateTypes.LightingState, SceneDataTypes.SceneDataActions<LightingStateTypes.LightingState>> = (state = initialState, action) => {
  switch(action.type) {
    case SceneDataActionTypes.SET_SCENE_DATA:
      return action.payload;

    case SceneDataActionTypes.RESET_SCENE_DATA:
      return state;
  };
};

export default lighting;
