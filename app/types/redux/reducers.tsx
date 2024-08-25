import { ReduxTypes } from "..";

type StateType<StateTypes> = StateTypes;

type ReducerFunctionType<StateTypes, ReturnType, PayloadType = {}> = (state: StateType<StateTypes>, action: ReduxTypes.ActionTypes.ActionTypes<PayloadType>) => ReturnType;

export {
  StateType,
  ReducerFunctionType
};
