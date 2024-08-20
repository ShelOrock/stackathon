import React from 'react';
import { useAppDispatch } from '../../../../../../hooks';

import * as StyledComponents from '../../../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import { OnClickType } from '../../../../../../types';
import { deleteEntity } from '../../../../../../redux/entities/actions';
import { AppData } from '../../../../../../enums';

export default (element) => {

  const dispatch = useAppDispatch();

  const evaluateElementType = (element): OnClickType => {
    switch(element.type) {
      case 'rooms':
        return (): void => {
          dispatch(deleteEntity(AppData.Rooms, element.id));
        };

      case 'doors':
        return (): void => {
          dispatch(deleteEntity(AppData.Doors, element.id));
        };

      case 'windows':
        return (): void => {
          dispatch(deleteEntity(AppData.Windows, element.id));
        };

      case 'floors':
        return (): void => {
          dispatch(deleteEntity(AppData.Floors, element.id))
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