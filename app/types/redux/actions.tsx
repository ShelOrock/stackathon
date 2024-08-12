export interface ActionTypes<PayloadType = {}> {
  [key: string]: any;
  type: string;
  payload?: PayloadType;
};

export type ActionFunctionType<PayloadType = {}> = (payload?: PayloadType) => ActionTypes<PayloadType>;
