export const SET_CURRENT_FLOOR = Symbol('SET_CURRENT_FLOOR');

export const RESET_CURRENT_FLOOR = Symbol('RESET_CURRENT_FLOOR');

enum CurrentFloorActionTypes {
  SET_CURRENT_FLOOR = "SET_CURRENT_FLOOR",
  RESET_CURRENT_FLOOR = "RESET_CURRENT_FLOOR"
};

export default CurrentFloorActionTypes;
