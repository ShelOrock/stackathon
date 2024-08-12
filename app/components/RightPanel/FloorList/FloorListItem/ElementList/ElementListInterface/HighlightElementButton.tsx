import * as React from 'react';
import { useAppDispatch } from '../../../../../../hooks';

import * as StyledComponents from '../../../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import * as ReduxActions from '../../../../../../redux/actions';
const { 
  roomActions: { updateRoom },
  doorActions: { updateDoor },
  windowActions: { updateWindow },
} = ReduxActions;

import { ElementTypes, OnClickType } from '../../../../../../types';

export default (element: ElementTypes) => {
  const {
    index,
    isHighlighted,
    tag
  } = element;

  const dispatch = useAppDispatch();

  const evaluateElementType = (element: ElementTypes): OnClickType => {
    switch(element.type) {
      case 'room':
        return (): void => { dispatch(updateRoom({ index, isHighlighted: !isHighlighted })) };

      case 'door':
        return (): void => { dispatch(updateDoor({ index, isHighlighted: !isHighlighted })) };

      case 'window':
        return (): void => { dispatch(updateWindow({ index, isHighlighted: !isHighlighted })) };
        
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