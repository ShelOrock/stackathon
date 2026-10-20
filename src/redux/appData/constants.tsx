enum EntityActionTypes {
  ADD_ENTITY = "ADD_ENTITY",
  UPDATE_ENTITY = "UPDATE_ENTITY",
  DELETE_ENTITY = "DELETE_ENTITY",
  RESET_ENTITIES = "RESET_ENTITIES",
};

enum ActiveIdActionTypes {
  SET_ACTIVE_ID = "SET_ACTIVE_ID",
  RESET_ACTIVE_ID = "RESET_ACTIVE_ID"
};

export {
  EntityActionTypes,
  ActiveIdActionTypes
};
