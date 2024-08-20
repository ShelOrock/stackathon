import React from 'react';

import ToggleCommands from './ToggleCommands/ToggleCommands';
import Column from '../Column';
import AddFloorButton from './Toolbar/AddFloorButton';
import RoomCreator from './Toolbar/RoomCreator';
import DoorCreator from './Toolbar/DoorCreator';
import WindowCreator from './Toolbar/WindowCreator';

export default () => {
  return (
    <Column>
      <ToggleCommands />
      <AddFloorButton />
      <RoomCreator />
      <DoorCreator />
      <WindowCreator />
    </Column>
  );
};