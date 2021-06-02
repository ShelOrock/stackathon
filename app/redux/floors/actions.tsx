import {
  CREATE_FLOOR,
  UPDATE_FLOOR,
  DELETE_FLOOR,
  RESET_FLOORS
} from './constants';

import { FloorTypes, ActionFunctionType } from '../../types';

export const createFloor: ActionFunctionType<FloorTypes> = payload => ({
  type: CREATE_FLOOR,
  payload
});

export const updateFloor: ActionFunctionType<FloorTypes> = payload => ({
  type: UPDATE_FLOOR,
  payload
});

export const deleteFloor: ActionFunctionType<FloorTypes> = payload => ({
  type: DELETE_FLOOR,
  payload
});

export const resetFloors: ActionFunctionType<FloorTypes> = () => ({ type: RESET_FLOORS });