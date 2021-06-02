import React from 'react';

import AddFloorButton from './AddFloorButton';
import RoomCreator from './RoomCreator';
import DoorCreator from './DoorCreator';
import WindowCreator from './WindowCreator';
import * as StyledComponent from '../../StyledComponents';
const { StyledDiv: { Column } } = StyledComponent;

export default () => {
  return (
    <Column>
      <AddFloorButton />
      <RoomCreator />
      <DoorCreator />
      <WindowCreator />
    </Column>
  );
}