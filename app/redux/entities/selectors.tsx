import { createSelector } from "@reduxjs/toolkit";

const selectAppData = (entityName, parameters = {}) => createSelector([
  state => selectAppDataEntities(state, entityName),
  state => selectAppDataIds(state, entityName),
], (entities, ids) => convertAppDataEntitiesToArray(entities, ids, parameters)
);

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

const convertAppDataEntitiesToArray = (entities, ids, {
  attributes = []
}) => {
  const selectedEntities = ids.map(id => entities[id]);
  const selectedEntitiesWithFilteredAttributes = filterEntityAttributes(selectedEntities, attributes);

  return selectedEntitiesWithFilteredAttributes;
};

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
}

export {
  selectAppData,
  selectAppDataIds
};
