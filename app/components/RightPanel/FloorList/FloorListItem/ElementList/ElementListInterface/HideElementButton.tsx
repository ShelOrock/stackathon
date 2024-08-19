import React from 'react';
import { useAppDispatch } from "../../../../../../hooks";

import * as StyledComponents from '../../../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import { ElementTypes, OnClickType } from '../../../../../../types';
import { AppData } from '../../../../../../enums';
import { updateEntity } from '../../../../../../redux/entities/actions';

export default (element) => {
  const {
    id,
    isHidden,
    tag
  } = element;

  const dispatch = useAppDispatch();

  const evaluateElementType = (element: ElementTypes): OnClickType => {
    switch(element.type) {
      case AppData.Rooms:
        return (): void => {
          dispatch(updateEntity(AppData.Rooms, { id, isHidden: !isHidden }))
        };

      case AppData.Doors:
        return (): void => {
          dispatch(updateEntity(AppData.Doors, { id, isHidden: !isHidden }))
        };

      case AppData.Windows:
        return (): void => {
          dispatch(updateEntity(AppData.Windows, { id, isHidden: !isHidden }))
        };
        
      default:
        null;
    }
  }

  return (
    <SmallButton
      onClick={ evaluateElementType(element) }
      // variant={ isHidden ? "secondary" : tag }
    >{ isHidden ? <>&#127770;</> : <>&#127774;</> }</SmallButton>
  )
};