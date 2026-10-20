import { UIStateTypes } from "..";

interface ShowLabelsState {
  rooms: boolean;
  doors: boolean;
  windows: boolean;
}

interface SetShowLabelsAction<Payload> extends UIStateTypes.SetUIStateAction<Payload> {
  entityName: string;
}

type ShowLabelsActions = 
| SetShowLabelsAction<boolean>
| UIStateTypes.ResetUIStateAction

export { 
  ShowLabelsState,
  SetShowLabelsAction,
  ShowLabelsActions,
};