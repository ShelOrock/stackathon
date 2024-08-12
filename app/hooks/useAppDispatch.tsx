import { useDispatch } from "react-redux";

import { ReduxTypes } from "../types"

const useAppDispatch = useDispatch.withTypes<ReduxTypes.AppDispatchType>();

export default useAppDispatch;
