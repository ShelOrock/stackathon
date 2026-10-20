import { Elements } from "../../domain";
import { RootState } from "../../types/redux/store";
import { AppDataTypes } from ".";

const selectAppDataEntities = (state: RootState, entityName: AppDataTypes.AppData): Record<number, Elements.BuildingElement> => {
  const selectedSlice = state.appData[entityName];

  if(!selectedSlice) {
    return {};
  };

  return selectedSlice.entities;
};

const selectAppDataIds = (state: RootState, entityName: AppDataTypes.AppData): number[] => {
  const selectedSlice = state.appData[entityName];

  if(!selectedSlice) {
    return [];
  }

  return selectedSlice.ids;
}

const selectAppDataActiveId = (state: RootState, entityName: AppDataTypes.AppData) => {
  const selectedSlice = state.appData[entityName];

  if(!selectedSlice) {
    return null;
  };

  return selectedSlice.activeId;
};

export {
  selectAppDataEntities,
  selectAppDataIds,
  selectAppDataActiveId
};
