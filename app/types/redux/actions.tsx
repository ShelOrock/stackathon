export interface ActionTypes<PayloadType> {
  type: Symbol;
  payload?: PayloadType;
};

export type ActionFunctionType<PayloadType = {}> = (payload?: PayloadType) => ActionTypes<PayloadType>;