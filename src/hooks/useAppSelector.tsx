import { useSelector, TypedUseSelectorHook } from "react-redux";

import { ReduxTypes } from "../types";

const useAppSelector: TypedUseSelectorHook<ReduxTypes.StoreTypes.RootState> = useSelector;

export default useAppSelector;

