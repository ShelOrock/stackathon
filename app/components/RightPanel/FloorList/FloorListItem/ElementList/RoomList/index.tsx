import * as React from 'react';
import { useAppSelector } from '../../../../../../hooks';

import RoomListItem from './RoomListItem';

import { FloorTypes, RoomTypes } from '../../../../../../types';

export default (floor: FloorTypes) => {

  const { rooms = [] } = useAppSelector(state => state);

  return (
    <>
      { rooms.map((room: RoomTypes) => floor.index === room.floor && <RoomListItem key={ room.index } { ...room } /> ) }
    </>
  );
};