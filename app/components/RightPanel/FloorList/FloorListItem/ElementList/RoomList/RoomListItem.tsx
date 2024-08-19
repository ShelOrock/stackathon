import React from 'react';

import ElementListInterface from '../ElementListInterface';
import * as StyledComponents from '../../../../../StyledComponents';
const { StyledList: { ListItem } } = StyledComponents;

import { RoomTypes } from '../../../../../../types';
import { AppData } from '../../../../../../enums';

export default (room: RoomTypes) => (
  <ListItem>
    <ElementListInterface type={ AppData.Rooms } { ...room } />
  </ListItem>
);
