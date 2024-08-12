import FloorsActionTypes from './constants';

import { FloorTypes, ReduxTypes } from '../../types';

export const createFloor: ReduxTypes.ActionTypes.UnknownActionFunctionType<FloorTypes> = payload => ({
  type: FloorsActionTypes.CREATE_FLOOR,
  payload
});

export const updateFloor: ReduxTypes.ActionTypes.UnknownActionFunctionType<FloorTypes> = payload => ({
  type: FloorsActionTypes.UPDATE_FLOOR,
  payload
});

export const deleteFloor: ReduxTypes.ActionTypes.UnknownActionFunctionType<FloorTypes> = payload => ({
  type: FloorsActionTypes.DELETE_FLOOR,
  payload
});

export const resetFloors: ReduxTypes.ActionTypes.UnknownActionFunctionType<FloorTypes> = () => ({ type: FloorsActionTypes.RESET_FLOORS });