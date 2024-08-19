import React from "react";
import { useAppDispatch } from "../../../../../../hooks";

import * as StyledComponents from "../../../../../StyledComponents";
const { StyledButton: { SmallButton } } = StyledComponents;

import {
  ElementTypes,
  OnClickType
} from "../../../../../../types";
import { AppData } from "../../../../../../enums";
import { updateEntity } from "../../../../../../redux/entities/actions";

export default (element) => {
  const {
    id,
    isLocked,
    tag
  } = element;

  const dispatch = useAppDispatch();

  const evaluateElementType = (element: ElementTypes): OnClickType => {
    switch(element.type) {
      case AppData.Rooms:
        return (): void => {
          dispatch(updateEntity(AppData.Rooms, { id, isLocked: !isLocked }))
        };

      case AppData.Doors:
        return (): void => {
          dispatch(updateEntity(AppData.Doors, { id, isLocked: !isLocked }))
        };

      case AppData.Windows:
        return (): void => {
          dispatch(updateEntity(AppData.Windows, { id, isLocked: !isLocked }))
        };
        
      default:
        null;
    };
  };

  interface ButtonPropTypes {
    variant: string;
    onClick: OnClickType;
  }

  const buttonProps: ButtonPropTypes = {
    variant: isLocked ? tag : "secondary",
    onClick: evaluateElementType(element),
  };

  return <SmallButton { ...buttonProps }>{ isLocked ? <>&#128274;</> : <>&#128275;</> }</SmallButton>
};