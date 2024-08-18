import { ReduxTypes } from "..";
import { AppData } from "../../enums";

interface ActionTypes<PayloadType = {}> {
  [key: string]: any;
  entityName?: ReduxTypes.Entities;
  type: string;
  payload?: PayloadType;
};

type UnknownActionFunctionType<PayloadType = {}> = (payload?: PayloadType) => ActionTypes<PayloadType>;

type KnownActionFunctionType<PayloadType = {}> = (entityName: ReduxTypes.Entities, payload?: PayloadType) => ActionTypes<PayloadType>

export {
  ActionTypes,
  UnknownActionFunctionType,
  KnownActionFunctionType,
};
