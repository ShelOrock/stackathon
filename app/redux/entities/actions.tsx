import EntitiesActionTypes from "./constants";

import { ReduxTypes } from "../../types";

const addEntity: ReduxTypes.ActionTypes.KnownActionFunctionType<any> = (entityName, payload) => ({
  entityName,
  type: EntitiesActionTypes.ADD_ENTITY,
  payload
});

const updateEntity: ReduxTypes.ActionTypes.KnownActionFunctionType<any> = (entityName, payload) => ({
  entityName,
  type: EntitiesActionTypes.UPDATE_ENTITY,
  payload
});

const deleteEntity: ReduxTypes.ActionTypes.KnownActionFunctionType<any> = (entityName, payload) => ({
  entityName,
  type: EntitiesActionTypes.DELETE_ENTITY,
  payload
});

const resetEntities: ReduxTypes.ActionTypes.KnownActionFunctionType<any> = entityName => ({
  entityName,
  type: EntitiesActionTypes.RESET_ENTITIES
});

const setActiveId: ReduxTypes.ActionTypes.KnownActionFunctionType<any> = (entityName, payload) => ({
  entityName,
  type: EntitiesActionTypes.SET_ACTIVE_ID,
  payload
});

const resetActiveId: ReduxTypes.ActionTypes.KnownActionFunctionType<any> = entityName => ({
  entityName,
  type: EntitiesActionTypes.RESET_ACTIVE_ID
});

export {
  addEntity,
  updateEntity,
  deleteEntity,
  resetEntities,
  setActiveId,
  resetActiveId
};
