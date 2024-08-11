import * as React from 'react';
import { useAppSelector } from "../../../../hooks";

import RoomHUD from './RoomHUDElements';
import * as StyledComponents from '../../../StyledComponents'
const { StyledDiv: { ElementHUDContainer } } = StyledComponents

import { RoomTypes } from '../../../../types';

export default (room: RoomTypes) => {

  const { toggleHUD } = useAppSelector(state => state);

  return (
    toggleHUD &&
    <ElementHUDContainer>
      <RoomHUD { ...room } />
    </ElementHUDContainer>
  )
}