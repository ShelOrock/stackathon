import React from 'react';

import RoomList from './RoomList';
import DoorList from './DoorList';
import WindowList from './WindowList';

import { FloorTypes } from '../../../../../types';
import Column from '../../../../Column';

export default (floor: FloorTypes) => {
  return (
    <Column>
      <RoomList { ...floor } />
      <DoorList { ...floor } />
      <WindowList { ...floor } />
    </Column>
  )
};