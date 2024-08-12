import { ReduxTypes } from '..';

export type StateType<StateTypes> = StateTypes;

export type ReducerFunctionType<StateTypes, ReturnType, PayloadType = {}> = (state: StateType<StateTypes>, action: ReduxTypes.ActionTypes.ActionTypes<PayloadType>) => ReturnType;
