import * as React from 'react';
import { useAppDispatch } from "../../../../../../hooks";

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
    isHidden,
    tag
  } = element;

  const dispatch = useAppDispatch();

  const evaluateElementType = (element: ElementTypes): OnClickType => {
    switch(element.type) {
      case 'room':
        return (): void => { dispatch(updateRoom({ index, isHidden: !isHidden })) };

      case 'door':
        return (): void => { dispatch(updateDoor({ index, isHidden: !isHidden })) };

      case 'window':
        return (): void => { dispatch(updateWindow({ index, isHidden: !isHidden })) };
        
      default:
        null;
    }
  }

  interface ButtonPropTypes {
    variant: string;
    onClick: OnClickType;
  };

  const buttonProps: ButtonPropTypes = {
    variant: isHidden ? 'secondary' : tag,
    onClick: evaluateElementType(element),
  };

  return <SmallButton { ...buttonProps }>{ isHidden ? <>&#127770;</> : <>&#127774;</> }</SmallButton>
};