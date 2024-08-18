import React from 'react';
import { useAppDispatch } from "../../../../../../hooks";

import * as StyledComponents from '../../../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import * as ReduxActions from '../../../../../../redux/actions';
const {
  roomActions: { updateRoom },
  windowActions: { updateWindow }
} = ReduxActions;

import {
  ElementTypes,
  OnClickType
} from '../../../../../../types';
import { AppData } from '../../../../../../enums';
import UIDataEntities from '../../../../../../types/redux/entities';
import { updateEntity } from '../../../../../../redux/entities/actions';

export default (element: ElementTypes) => {
  const {
    id,
    isLocked,
    tag
  } = element;

  const dispatch = useAppDispatch();

  const evaluateElementType = (element: ElementTypes): OnClickType => {
    switch(element.type) {
      case AppData.ROOMS:
        return (): void => {
          dispatch(updateRoom({ id, isLocked: !isLocked }))
        };

      case AppData.DOORS:
        return (): void => {
          dispatch(updateEntity(UIDataEntities.doors, { id, isLocked: !isLocked }))
        };

      case AppData.WINDOWS:
        return (): void => {
          dispatch(updateWindow({ id, isLocked: !isLocked }))
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
    variant: isLocked ? tag : 'secondary',
    onClick: evaluateElementType(element),
  };

  return <SmallButton { ...buttonProps }>{ isLocked ? <>&#128274;</> : <>&#128275;</> }</SmallButton>
};