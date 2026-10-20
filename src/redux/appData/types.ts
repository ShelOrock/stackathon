import * as Elements from "../../domain/elements";
import * as EntitiesActionTypes from "./constants";

// State
type AppData = 
  | "room"
  | "door"
  | "window"

type Entity = Elements.BuildingElement;

type Entities = Record<number, Entity>;

interface EntityState<BuildingElement extends Elements.BuildingElement> {
  ids: number[];
  entities: Record<number, BuildingElement>;
  activeId: number | null;
}

interface AppDataState {
  rooms: EntityState<Elements.Room>;
  doors: EntityState<Elements.Door>;
  windows: EntityState<Elements.Window>;
}


// Actions
interface AddEntityAction<BuildingElement extends Elements.BuildingElement> {
  type: EntitiesActionTypes.EntityActionTypes.ADD_ENTITY;
  entityName: AppData;
  payload: BuildingElement;
}

interface UpdateEntityAction<BuildingElement extends Elements.BuildingElement> {
  type: EntitiesActionTypes.EntityActionTypes.UPDATE_ENTITY;
  entityName: AppData;
  payload: BuildingElement;
}

interface DeleteEntityAction {
  type: EntitiesActionTypes.EntityActionTypes.DELETE_ENTITY;
  entityName: AppData;
  payload: number
}

interface ResetEntityAction {
  type: EntitiesActionTypes.EntityActionTypes.RESET_ENTITIES;
  entityName: AppData;
}

interface SetIdAction {
  type: EntitiesActionTypes.ActiveIdActionTypes.SET_ACTIVE_ID;
  entityName: AppData;
  payload: number;
}

interface ResetIdAction {
  type: EntitiesActionTypes.ActiveIdActionTypes.RESET_ACTIVE_ID;
  entityName: AppData;
}

type EntityActions = 
| AddEntityAction<Elements.BuildingElement>
| UpdateEntityAction<Elements.BuildingElement>
| DeleteEntityAction
| ResetEntityAction

type ActiveIdActions = 
| SetIdAction
| ResetIdAction;

type ActionCreator<Action, Payload = null> = (
  entityName: AppData,
  payload: Payload
) => Action;

export {
  AppData,
  Entity,
  Entities,
  EntityState,
  AppDataState,
  EntityActions,
  ActiveIdActions,
  AddEntityAction,
  UpdateEntityAction,
  DeleteEntityAction,
  ResetEntityAction,
  SetIdAction,
  ResetIdAction,
  ActionCreator,
};
