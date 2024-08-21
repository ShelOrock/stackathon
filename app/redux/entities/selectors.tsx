import { createSelector } from "@reduxjs/toolkit";

const selectAppData = (entityName, parameters = {}) => createSelector([
  state => selectAppDataEntities(state, entityName),
  state => selectAppDataIds(state, entityName),
], (entities, ids) => convertAppDataEntitiesToArray(entities, ids, parameters)
);

const selectActiveAppData = (entityName, parameters = {}) => createSelector([
  state => selectAppDataEntities(state, entityName),
  state => selectAppDataActiveId(state, entityName),
], (entities, activeId) => convertSelectedIdToEntity(entities, activeId, parameters));

const selectAppDataEntities = (state, entityName) => {
  const selectedSlice = state.appData[entityName];

  if(!selectedSlice) {
    return {};
  };

  return selectedSlice.entities;
};

const selectAppDataIds = (state, entityName) => {
  const selectedSlice = state.appData[entityName];

  if(!selectedSlice) {
    return [];
  };

  return selectedSlice.ids;
};

const selectAppDataActiveId = (state, entityName) => {
  const selectedSlice = state.appData[entityName];

  if(!selectedSlice) {
    return null;
  };

  return selectedSlice.activeId;
};

const convertAppDataEntitiesToArray = (entities, ids, {
  attributes = [],
  filters = {}
}) => {
  const filteredIds = filterIds(entities, ids, filters);
  const selectedEntities = filteredIds.map(id => entities[id]);
  const selectedEntitiesWithFilteredAttributes = filterEntityAttributes(selectedEntities, attributes);

  return selectedEntitiesWithFilteredAttributes;
};

const convertSelectedIdToEntity = (entities, activeId, {
  attributes = []
}) => {
  const activeEntity = entities[activeId];
  
  if(!activeEntity) {
    return {};
  };

  const activeEntityWithFilteredAttributes = reduceEntityAttributes(activeEntity, attributes);

  return activeEntityWithFilteredAttributes;
};

const filterIds = (entities, ids, filters) => {
  if(!filters) {
    return ids;
  };

  const filteredIds = ids.filter(id => {
    const currentEntity = entities[id];

    if(!currentEntity) {
      return false;
    };

    const matchesFilters = Object.entries(filters).every(([ attribute = "", filter = null ]: any) => filter === currentEntity[attribute]);

    return matchesFilters;
  });

  return filteredIds;
}

const filterEntityAttributes = (entities, attributes) => {
  if(!attributes.length) {
    return entities;
  };
  
  return entities.map(entity => reduceEntityAttributes(entity, attributes));
};

const reduceEntityAttributes = (entity, attributes) => {
  const filteredAttributes = attributes.reduce((accumulator, attribute) => ({
    ...accumulator,
    [attributes]: entity[attribute]
  }), {});

  return filteredAttributes;
};

export {
  selectAppData,
  selectAppDataIds,
  selectActiveAppData
};
