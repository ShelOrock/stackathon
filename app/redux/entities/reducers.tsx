import { combineReducers } from "@reduxjs/toolkit";

import EntitiesActionTypes from "./constants";
import { ReduxTypes } from "../../types";
import { AppData as AppDataSlices } from "../../enums";

const idsInitialState: ReduxTypes.StateType<number[]> = [];
const entitiesInitialState: ReduxTypes.StateType<{ [id: number]: any }> = {};

const appDataSliceInitialState: ReduxTypes.StateType<{
  ids: typeof idsInitialState,
  entities: typeof entitiesInitialState
}> = {
  ids: idsInitialState,
  entities: entitiesInitialState
};

const ids: ReduxTypes.ReducerFunctionType<typeof idsInitialState, number[], any> = (state = idsInitialState, action) => {
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

const entities: ReduxTypes.ReducerFunctionType<typeof entitiesInitialState, { [id: number]: any }, any> = (state = entitiesInitialState, action) => {
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

const createAppDataSlice = entityName => (state = appDataSliceInitialState, action) => {
  switch(action.entityName) {
    case `${ entityName }`:
      return {
        ids: ids(state.ids, action),
        entities: entities(state.entities, action)
      };

    default:
      return state;
  };
}

export default combineReducers({
  rooms: createAppDataSlice(AppDataSlices.ROOMS),
  doors: createAppDataSlice(AppDataSlices.DOORS),
  windows: createAppDataSlice(AppDataSlices.WINDOWS)
});
