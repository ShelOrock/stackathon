import * as React from 'react';
import { useAppDispatch } from '../../../../../../hooks';

import * as StyledComponents from '../../../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import * as ReduxActions from '../../../../../../redux/actions';
const { 
  roomActions: { updateRoom },
  windowActions: { updateWindow },
} = ReduxActions;

import { ElementTypes, OnClickType } from '../../../../../../types';
import { AppData } from '../../../../../../enums';
import { updateEntity } from '../../../../../../redux/entities/actions';
import UIDataEntities from '../../../../../../types/redux/entities';

export default (element: ElementTypes) => {
  const {
    id,
    isHighlighted,
    tag
  } = element;

  const dispatch = useAppDispatch();

  const evaluateElementType = (element: ElementTypes): OnClickType => {
    switch(element.type) {
      case AppData.ROOMS:
        return (): void => {
          dispatch(updateRoom({ id, isHighlighted: !isHighlighted }))
        };

      case AppData.DOORS:
        return (): void => {
          dispatch(updateEntity(UIDataEntities.doors, { id, isHighlighted: !isHighlighted }))
        };

      case AppData.WINDOWS:
        return (): void => {
          dispatch(updateWindow({ id, isHighlighted: !isHighlighted }))
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
    variant: isHighlighted ? tag : 'secondary',
    onClick: evaluateElementType(element)
  }

  return <SmallButton { ...buttonProps }>{ element.label || 'Untitled Element'}</SmallButton>
}