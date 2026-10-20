import { AppDataTypes, AppDataActionTypes } from ".";


const addEntity: AppDataTypes.ActionCreator<AppDataTypes.AddEntityAction<AppDataTypes.Entity>, AppDataTypes.Entity> = (entityName, payload) => ({
  entityName,
  type: AppDataActionTypes.EntityActionTypes.ADD_ENTITY,
  payload
});

const updateEntity: AppDataTypes.ActionCreator<AppDataTypes.UpdateEntityAction<AppDataTypes.Entity> , AppDataTypes.Entity> = (entityName, payload) => ({
  entityName,
  type: AppDataActionTypes.EntityActionTypes.UPDATE_ENTITY,
  payload
});

const deleteEntity: AppDataTypes.ActionCreator<AppDataTypes.DeleteEntityAction, number> = (entityName, payload) => ({
  entityName,
  type: AppDataActionTypes.EntityActionTypes.DELETE_ENTITY,
  payload
});

const resetEntities: AppDataTypes.ActionCreator<AppDataTypes.ResetEntityAction> = entityName => ({
  entityName,
  type: AppDataActionTypes.EntityActionTypes.RESET_ENTITIES
});

const setActiveId: AppDataTypes.ActionCreator<AppDataTypes.SetIdAction, number> = (entityName, payload) => ({
  entityName,
  type: AppDataActionTypes.ActiveIdActionTypes.SET_ACTIVE_ID,
  payload
});

const resetActiveId: AppDataTypes.ActionCreator<AppDataTypes.ResetIdAction> = entityName => ({
  entityName,
  type: AppDataActionTypes.ActiveIdActionTypes.RESET_ACTIVE_ID
});

export {
  addEntity,
  updateEntity,
  deleteEntity,
  resetEntities,
  setActiveId,
  resetActiveId
};
