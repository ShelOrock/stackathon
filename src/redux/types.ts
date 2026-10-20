type ActionCreator<Action, Payload = null> = (
  payload: Payload
) => Action;

// Reducers
type Reducer<State, Action> = (
  state: State | undefined,
  action: Action
) => State;

export {
  ActionCreator,
  Reducer
}