import { ShowLabelsTypes } from ".";
import { UIStateActionTypes } from "..";
import { ReduxTypes } from "../..";

const initialState: ShowLabelsTypes.ShowLabelsState = {
  rooms: true,
  doors: true,
  windows: true
};

const showLabels: ReduxTypes.Reducer<ShowLabelsTypes.ShowLabelsState, ShowLabelsTypes.ShowLabelsActions> = (state = initialState, action) => {
  switch(action.type) {
    case UIStateActionTypes.SET_UI_STATE:
      return {
        ...state,
        [action.entityName]: action.payload
      }

    case UIStateActionTypes.RESET_UI_STATE:
      return initialState;
  };
};

export default showLabels;
