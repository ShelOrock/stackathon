import { ActionTypes } from '.';

export type StateType<StateTypes> = StateTypes;

export type ReducerFunctionType<StateTypes, ReturnType, PayloadType = {}> = (state: StateType<StateTypes>, action: ActionTypes<PayloadType>) => ReturnType;