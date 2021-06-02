import * as React from 'react';

import ElementListInterface from '../ElementListInterface';
import * as StyledComponents from '../../../../../StyledComponents';
const { StyledList: { ListItem } } = StyledComponents;

import { RoomTypes, ElementTypes } from '../../../../../../types';

export default (room: RoomTypes) => {

  const roomHUDProps: ElementTypes = {
    type: 'room',
    ...room
  };

  return (
    <ListItem>
      <ElementListInterface { ...roomHUDProps } />
    </ListItem>
  )
}