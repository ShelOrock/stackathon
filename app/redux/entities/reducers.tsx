import { combineReducers } from "@reduxjs/toolkit";

import EntitiesActionTypes from "./constants";
import { ReduxTypes } from "../../types";
import { AppData as AppDataSlices } from "../../enums";

const idsInitialState: ReduxTypes.ReducerTypes.StateType<number[]> = [];
const entitiesInitialState: ReduxTypes.ReducerTypes.StateType<{ [id: number]: any }> = {};
const activeIdInitialState: ReduxTypes.ReducerTypes.StateType<number> = null;

const appDataSliceInitialState: ReduxTypes.ReducerTypes.StateType<{
  ids: typeof idsInitialState,
  entities: typeof entitiesInitialState,
  activeId: typeof activeIdInitialState
}> = {
  ids: idsInitialState,
  entities: entitiesInitialState,
  activeId: activeIdInitialState
};

const ids: ReduxTypes.ReducerTypes.ReducerFunctionType<typeof idsInitialState, number[], any> = (state = idsInitialState, action) => {
  switch(action.type) {
    case EntitiesActionTypes.ADD_ENTITY:
      return [ ...state, action.payload.id ];

    case EntitiesActionTypes.DELETE_ENTITY:
      return state.filter(id => id !== action.payload);

    case EntitiesActionTypes.RESET_ENTITIES:
      return idsInitialState;

    case EntitiesActionTypes.UPDATE_ENTITY:
    default:
      return state;
  };
};

const entities: ReduxTypes.ReducerTypes.ReducerFunctionType<typeof entitiesInitialState, { [id: number]: any }, any> = (state = entitiesInitialState, action) => {
  switch(action.type) {
    case EntitiesActionTypes.ADD_ENTITY:
      return {
        ...state,
        [action.payload.id]: action.payload
      };

    case EntitiesActionTypes.UPDATE_ENTITY:
      const {
        [action.payload.id]: entityToUpdate
      } = state;

      return {
        ...state,
        [action.payload.id]: {
          ...entityToUpdate,
          ...action.payload
        }
      };

    case EntitiesActionTypes.DELETE_ENTITY:
      const {
        [action.payload]: entityToDelete,
        ...remainingState
      } = state;

      return remainingState;

    case EntitiesActionTypes.RESET_ENTITIES:
      return entitiesInitialState;

    default:
      return state;
  };
};

const activeId: ReduxTypes.ReducerTypes.ReducerFunctionType<typeof activeIdInitialState, number, number> = (state = activeIdInitialState, action) => {
  switch(action.type) {
    case EntitiesActionTypes.SET_ACTIVE_ID:
      return action.payload;

    case EntitiesActionTypes.RESET_ACTIVE_ID:
      return activeIdInitialState;

    default:
      return state;
  };
};

const createAppDataSlice = entityName => (state = appDataSliceInitialState, action) => {
  switch(action.entityName) {
    case `${ entityName }`:
      return {
        ids: ids(state.ids, action),
        entities: entities(state.entities, action),
        activeId: activeId(state.activeId, action)
      };

    default:
      return state;
  };
}

export default combineReducers({
  rooms: createAppDataSlice(AppDataSlices.Rooms),
  doors: createAppDataSlice(AppDataSlices.Doors),
  windows: createAppDataSlice(AppDataSlices.Windows),
  floors: createAppDataSlice(AppDataSlices.Floors),
  roofs: createAppDataSlice(AppDataSlices.Roofs)
});
