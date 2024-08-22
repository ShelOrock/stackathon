import React from 'react';

import RoomList from './RoomList';
import DoorList from './DoorList';
import WindowList from './WindowList';

import { FloorTypes } from '../../../../../types';
import Column from '../../../../Column';

export default ({ floorId }) => {
  return (
    <Column>
      <RoomList floorId={ floorId } />
      <DoorList floorId={ floorId } />
      <WindowList floorId={ floorId } />
    </Column>
  )
};