import { LightingStateTypes } from ".";
import { SceneDataTypes, SceneDataActionTypes } from "..";
import { ReduxTypes } from "../..";

const setLighting: ReduxTypes.ActionCreator<SceneDataTypes.SetSceneDataAction<LightingStateTypes.LightingState>, LightingStateTypes.LightingState> = payload => ({
  type: SceneDataActionTypes.SET_SCENE_DATA,
  payload
});

const resetLighting: ReduxTypes.ActionCreator<SceneDataTypes.ResetSceneDataAction> = () => ({
  type: SceneDataActionTypes.RESET_SCENE_DATA
});

export {
  setLighting,
  resetLighting
};
