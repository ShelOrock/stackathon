import React from 'react';

import AddFloorButton from './AddFloorButton';
import RoomCreator from './RoomCreator';
import DoorCreator from './DoorCreator';
import WindowCreator from './WindowCreator';
import Column from '../../Column';

const Toolbar = () => (
  <Column>
    <AddFloorButton />
    <RoomCreator />
    <DoorCreator />
    <WindowCreator />
  </Column>
);

export default Toolbar;
