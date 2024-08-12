import * as React from 'react';
import { useStore } from 'react-redux';

import Room from './Room';
import Door from './Door';
import Window from './Window';

import {
  RoomTypes,
  DoorTypes,
  WindowTypes,
} from '../../../../types';

export default () => {
  
  const { rooms, doors, windows } = useStore().getState() as any;
  
  return (
    <> 
      { !!rooms.length && rooms.map((room: RoomTypes) => <Room key={ room.index } { ...room } />) }
      { !!doors.length && doors.map((door: DoorTypes) => <Door key={ door.index } { ...door } />) }
      { !!windows.length && windows.map((window: WindowTypes ) => <Window key={ window.index } { ...window } />) }
    </>
  );
};