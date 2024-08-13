import * as React from 'react';
import { useAppSelector } from "../../../hooks";

import RoomHUD from './RoomHUDElements';
import * as StyledComponents from '../../StyledComponents'
const { StyledDiv: { ElementHUDContainer } } = StyledComponents

import { RoomTypes } from '../../../types';

export default (room: RoomTypes) => {

  const elementActionsIsShowing = useAppSelector(state => state.toggleElements.elementActions.isShowing);

  return (
    elementActionsIsShowing &&
    <ElementHUDContainer>
      <RoomHUD { ...room } />
    </ElementHUDContainer>
  )
}