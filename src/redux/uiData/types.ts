import { UIStateActionTypes } from ".";

// Actions
interface SetUIStateAction<Payload> {
  type: UIStateActionTypes.SET_UI_STATE;
  payload: Payload;
}

interface ResetUIStateAction {
  type: UIStateActionTypes.RESET_UI_STATE;
}

type UIStateActions<Payload> = 
| SetUIStateAction<Payload>
| ResetUIStateAction

export { 
  SetUIStateAction,
  ResetUIStateAction,
  UIStateActions,
};
