import * as React from 'react';
import { useStore } from 'react-redux';

import Room from './Room';
import Door from './Door';

export default () => {
  
  const { rooms, doors, windows } = useStore().getState();
  
  return (
    <> 
      { !!rooms.length && rooms.map(room => <Room key={ room.index } { ...room } />) }
      { !!doors.length && doors.map(door => <Door key={ door.index } { ...door } />) }
    </>
  )
}