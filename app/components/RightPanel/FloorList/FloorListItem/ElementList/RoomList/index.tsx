import * as React from 'react';
import { useTypedSelector } from '../../../../../../utils';

import RoomListItem from './RoomListItem';

import { FloorTypes, RoomTypes } from '../../../../../../types';

export default (floor: FloorTypes) => {

  const { rooms } = useTypedSelector(state => state);

  const renderRooms = () => (
    !!rooms.length && rooms.map((room: RoomTypes) => {
      return floor.index === room.floor && <RoomListItem key={ room.index } { ...room } /> 
    })
  )

  return (
    <>
      { renderRooms() }
    </>
  );
};