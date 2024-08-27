import React from "react";
import { useAppDispatch } from "../../../../hooks";

import { resetSunPosition } from "../../../../redux/sunPosition/actions";

import { ReactTypes } from "../../../../types";
import Button from "../../../Button";

export default () => {

  const dispatch = useAppDispatch();
  
  const handleOnClick: ReactTypes.HandlerTypes.OnClickType = () => dispatch(resetSunPosition());

  return <Button onClick={ handleOnClick }>Reset Sun</Button>
}