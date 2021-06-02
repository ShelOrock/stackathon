import * as React from 'react';
import { useTypedSelector } from '../../../utils';

import RoomComponent from './RoomComponent';

import { RoomTypes } from '../../../types';

export default () => {

  const { rooms, currentFloor } = useTypedSelector(state => state);

  const renderRooms = () => (
    !!rooms.length && rooms.map((room: RoomTypes) => {
      return (
        <RoomComponent
          key={ room.index }
          isDisabled={ room.floor !== currentFloor.index }
          { ...room }
        />
      )
    })
  )

  return (
    <>
      { renderRooms() }
    </>
  )
}