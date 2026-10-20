import { SceneDataActionTypes } from ".";

// Actions
interface SetSceneDataAction<Payload> {
  type: SceneDataActionTypes.SET_SCENE_DATA;
  payload: Payload;
}

interface ResetSceneDataAction {
  type: SceneDataActionTypes.RESET_SCENE_DATA;
}

type SceneDataActions<Payload> = 
| SetSceneDataAction<Payload>
| ResetSceneDataAction

export { 
  SetSceneDataAction,
  ResetSceneDataAction,
  SceneDataActions,
};
