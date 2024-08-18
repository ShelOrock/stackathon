import { ReduxTypes } from "..";
import { AppData, UIData } from "../../enums";

interface ActionTypes<PayloadType = {}> {
  [key: string]: any;
  entityName?: AppData | UIData;
  type: string;
  payload?: PayloadType;
};

type UnknownActionFunctionType<PayloadType = {}> = (payload?: PayloadType) => ActionTypes<PayloadType>;

type KnownActionFunctionType<PayloadType = {}> = (entityName: AppData | UIData, payload?: PayloadType) => ActionTypes<PayloadType>

export {
  ActionTypes,
  UnknownActionFunctionType,
  KnownActionFunctionType,
};
