import React from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";

import * as StyledComponents from "../../StyledComponents"
const { StyledButton: { Button } } = StyledComponents;

import { toggleElementsActions } from "../../../redux/actions";

import { ReactTypes } from "../../../types";
import { UIData } from "../../../enums";

export default () => {

  const dispatch = useAppDispatch();
  
  const elementLabelsIsShowing = useAppSelector(state => state.toggleElements.elementLabels.isShowing);

  const handleOnClick: ReactTypes.HandlerTypes.OnClickType = () => dispatch(toggleElementsActions.setToggleElement(UIData.ElementLabels, !elementLabelsIsShowing));

  return <Button onClick={ handleOnClick }>Toggle Labels</Button>;
}