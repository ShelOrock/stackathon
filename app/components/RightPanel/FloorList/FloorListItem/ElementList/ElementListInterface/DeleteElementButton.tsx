import React from 'react';
import { useAppDispatch } from '../../../../../../hooks';

import * as StyledComponents from '../../../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import * as ReduxActions from '../../../../../../redux/actions';
const {
  roomActions: { deleteRoom },
  windowActions: { deleteWindow },
  floorActions: { deleteFloor }
} = ReduxActions;

import {
  ElementTypes,
  OnClickType,
} from '../../../../../../types';
import { deleteEntity } from '../../../../../../redux/entities/actions';
import UIDataEntities from '../../../../../../types/redux/entities';

export default (element: ElementTypes) => {

  const dispatch = useAppDispatch();

  const evaluateElementType = (element: ElementTypes): OnClickType => {
    switch(element.type) {
      case 'rooms':
        return (): void => {
          dispatch(deleteRoom(element))
        };

      case 'doors':
        return (): void => {
          dispatch(deleteEntity(UIDataEntities.doors, element.id))
        };

      case 'windows':
        return (): void => {
          dispatch(deleteWindow(element.id))
        };

      case 'floors':
        return (): void => {
          dispatch(deleteFloor(element))
        };

      default:
        null;
    }
  }

  interface ButtonPropTypes {
    variant: string;
    onClick: OnClickType;
  };

  const buttonProps: ButtonPropTypes = {
    variant: 'tertiary',
    onClick: evaluateElementType(element),
  };
  
  return <SmallButton { ...buttonProps }>X</SmallButton>
}