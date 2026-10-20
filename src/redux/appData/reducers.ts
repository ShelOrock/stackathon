import { combineReducers } from "@reduxjs/toolkit";

import { AppDataTypes, AppDataActionTypes } from ".";
import { ReduxTypes } from "..";


const idsInitialState: number[] = [];
const entitiesInitialState: AppDataTypes.Entities = {};
const activeIdInitialState: null = null;

const appDataSliceInitialState: AppDataTypes.EntityState<AppDataTypes.Entity> = {
  ids: idsInitialState,
  entities: entitiesInitialState,
  activeId: activeIdInitialState
};

const ids: ReduxTypes.Reducer<number[], AppDataTypes.EntityActions> = (state = idsInitialState, action) => {
  switch(action.type) {
    case AppDataActionTypes.EntityActionTypes.ADD_ENTITY:
      return [ ...state, action.payload.id ];

    case AppDataActionTypes.EntityActionTypes.DELETE_ENTITY:
      return state.filter(id => id !== action.payload);

    case AppDataActionTypes.EntityActionTypes.RESET_ENTITIES:
      return idsInitialState;

    case AppDataActionTypes.EntityActionTypes.UPDATE_ENTITY:
    default:
      return state;
  };
};

const entities: ReduxTypes.Reducer<AppDataTypes.Entities, AppDataTypes.EntityActions> = (state = entitiesInitialState, action) => {
  switch(action.type) {
    case AppDataActionTypes.EntityActionTypes.ADD_ENTITY:
      return {
        ...state,
        [action.payload.id]: action.payload
      };

    case AppDataActionTypes.EntityActionTypes.UPDATE_ENTITY:
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

    case AppDataActionTypes.EntityActionTypes.DELETE_ENTITY:
      const {
        [action.payload]: entityToDelete,
        ...remainingState
      } = state;

      return remainingState;

    case AppDataActionTypes.EntityActionTypes.RESET_ENTITIES:
      return entitiesInitialState;

    default:
      return state;
  };
};

const activeId: ReduxTypes.Reducer<number | null, AppDataTypes.ActiveIdActions> = (state = activeIdInitialState, action) => {
  switch(action.type) {
    case AppDataActionTypes.ActiveIdActionTypes.SET_ACTIVE_ID:
      return action.payload;

    case AppDataActionTypes.ActiveIdActionTypes.RESET_ACTIVE_ID:
      return activeIdInitialState;

    default:
      return state;
  };
};

const createAppDataSlice = (entityName: string) => (
  state: AppDataTypes.EntityState<AppDataTypes.Entity> = appDataSliceInitialState,
  action: AppDataTypes.EntityActions | AppDataTypes.ActiveIdActions
) => {
  switch(action.entityName) {
    case `${ entityName }`:
      switch(action.type) {
        case AppDataActionTypes.EntityActionTypes.ADD_ENTITY:
        case AppDataActionTypes.EntityActionTypes.UPDATE_ENTITY:
        case AppDataActionTypes.EntityActionTypes.DELETE_ENTITY:
        case AppDataActionTypes.EntityActionTypes.RESET_ENTITIES:
          return {
            ids: ids(state.ids, action),
            entities: entities(state.entities, action),
          };

        case AppDataActionTypes.ActiveIdActionTypes.SET_ACTIVE_ID:
        case AppDataActionTypes.ActiveIdActionTypes.RESET_ACTIVE_ID:
          return {
            activeId: activeId(state.activeId, action)
          };
      }

    default:
      return state;
  };
}

export default combineReducers({
  rooms: createAppDataSlice("rooms"),
  doors: createAppDataSlice("doors"),
  windows: createAppDataSlice("windows"),
  floors: createAppDataSlice("floors"),
  roofs: createAppDataSlice("roofs")
});
