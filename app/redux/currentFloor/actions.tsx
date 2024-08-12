import CurrentFloorActionTypes from './constants';

import {
  FloorTypes,
  ReduxTypes
} from '../../types';

export const setCurrentFloor: ReduxTypes.ActionTypes.UnknownActionFunctionType<FloorTypes> = payload => ({
  type: CurrentFloorActionTypes.SET_CURRENT_FLOOR,
  payload
});

export const resetCurrentFloor: ReduxTypes.ActionTypes.UnknownActionFunctionType<FloorTypes> = () => ({ type: CurrentFloorActionTypes.RESET_CURRENT_FLOOR });