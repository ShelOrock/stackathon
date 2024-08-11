import CurrentFloorActionTypes from './constants';

import {
  FloorTypes,
  ActionFunctionType
} from '../../types';

export const setCurrentFloor: ActionFunctionType<FloorTypes> = payload => ({
  type: CurrentFloorActionTypes.SET_CURRENT_FLOOR,
  payload
});

export const resetCurrentFloor: ActionFunctionType<FloorTypes> = () => ({ type: CurrentFloorActionTypes.RESET_CURRENT_FLOOR });