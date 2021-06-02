import { ActionTypes } from '.';

export type StateType<StateTypes> = StateTypes;

export type ReducerFunctionType<StateTypes, PayloadType = {}> = (state: StateType<StateTypes>, action: ActionTypes<PayloadType>) => StateType<StateTypes>;