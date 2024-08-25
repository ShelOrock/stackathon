import React from "react";
import { useAppDispatch } from "../../../../hooks";

import * as StyledComponents from "../../../StyledComponents";
const { StyledButton: { Button } } = StyledComponents;

import { resetSunPosition } from "../../../../redux/sunPosition/actions";

import { ReactTypes } from "../../../../types";

export default () => {

  const dispatch = useAppDispatch();
  
  const handleOnClick: ReactTypes.HandlerTypes.OnClickType = () => dispatch(resetSunPosition());

  return <Button onClick={ handleOnClick }>Reset Sun</Button>
}