import * as React from 'react';

import ElementListInterface from '../ElementListInterface';
import * as StyledComponents from '../../../../../StyledComponents';
const { StyledList: { ListItem } } = StyledComponents;

import { RoomTypes, ElementTypes } from '../../../../../../types';
import { AppData } from '../../../../../../enums';

export default (room: RoomTypes) => {

  const roomHUDProps: ElementTypes = {
    type: AppData.ROOM,
    ...room
  };

  return (
    <ListItem>
      <ElementListInterface { ...roomHUDProps } />
    </ListItem>
  )
}