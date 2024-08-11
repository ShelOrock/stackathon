import FloorsActionTypes from './constants';

import { FloorTypes, ActionFunctionType } from '../../types';

export const createFloor: ActionFunctionType<FloorTypes> = payload => ({
  type: FloorsActionTypes.CREATE_FLOOR,
  payload
});

export const updateFloor: ActionFunctionType<FloorTypes> = payload => ({
  type: FloorsActionTypes.UPDATE_FLOOR,
  payload
});

export const deleteFloor: ActionFunctionType<FloorTypes> = payload => ({
  type: FloorsActionTypes.DELETE_FLOOR,
  payload
});

export const resetFloors: ActionFunctionType<FloorTypes> = () => ({ type: FloorsActionTypes.RESET_FLOORS });