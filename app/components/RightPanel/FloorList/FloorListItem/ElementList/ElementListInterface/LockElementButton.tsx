import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as StyledComponents from '../../../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import * as ReduxActions from '../../../../../../redux/actions';
const {
  roomActions: { updateRoom },
  doorActions: { updateDoor },
  windowActions: { updateWindow }
} = ReduxActions;

import {
  ElementTypes,
  OnClickType
} from '../../../../../../types';

export default (element: ElementTypes) => {
  const {
    index,
    isLocked,
    tag
  } = element;

  const dispatch = useDispatch();

  const evaluateElementType = (element: ElementTypes): OnClickType => {
    switch(element.type) {
      case 'room':
        return (): void => { dispatch(updateRoom({ index, isLocked: !isLocked })) };

      case 'door':
        return (): void => { dispatch(updateDoor({ index, isLocked: !isLocked })) };

      case 'window':
        return (): void => { dispatch(updateWindow({ index, isLocked: !isLocked })) };
        
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

  return <SmallButton { ...buttonProps }>L</SmallButton>
};