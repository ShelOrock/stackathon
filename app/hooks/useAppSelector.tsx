import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { ReduxTypes } from "../types";

const useAppSelector: TypedUseSelectorHook<ReduxTypes.RootState> = useSelector;

export default useAppSelector;

