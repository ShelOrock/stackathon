import * as React from 'react';
import { useAppDispatch } from '../../../../../../hooks';

import * as StyledComponents from '../../../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import * as ReduxActions from '../../../../../../redux/actions';
const {
  roomActions: { deleteRoom },
  doorActions: { deleteDoor },
  windowActions: { deleteWindow },
  floorActions: { deleteFloor }
} = ReduxActions;

import {
  ElementTypes,
  OnClickType,
} from '../../../../../../types';

export default (element: ElementTypes) => {

  const dispatch = useAppDispatch();

  const evaluateElementType = (element: ElementTypes): OnClickType => {
    switch(element.type) {
      case 'room':
        return (): void => {
          dispatch(deleteRoom(element))
        };

      case 'door':
        return (): void => {
          dispatch(deleteDoor(element.index))
        };

      case 'window':
        return (): void => {
          dispatch(deleteWindow(element.index))
        };

      case 'floor':
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