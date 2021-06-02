import { SET_CURRENT_FLOOR, RESET_CURRENT_FLOOR } from './constants';

import {
  FloorTypes,
  ActionFunctionType
} from '../../types';

export const setCurrentFloor: ActionFunctionType<FloorTypes> = payload => ({
  type: SET_CURRENT_FLOOR,
  payload
});

export const resetCurrentFloor: ActionFunctionType<FloorTypes> = () => ({ type: RESET_CURRENT_FLOOR });