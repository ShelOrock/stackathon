import { useDispatch } from "react-redux";

import { AppDispatchType } from "../types"

const useAppDispatch = useDispatch.withTypes<AppDispatchType>();

export default useAppDispatch;
