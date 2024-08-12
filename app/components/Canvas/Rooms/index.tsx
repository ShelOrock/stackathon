import * as React from 'react';
import { useAppSelector } from '../../../hooks';

import RoomComponent from './RoomComponent';

import { RoomTypes } from '../../../types';

export default () => {

  const { rooms = [], currentFloor } = useAppSelector(state => state);

  return (
    <>
      {
        rooms.map((room: RoomTypes) => (
          <RoomComponent
            key={ room.index }
            isDisabled={ room.floor !== currentFloor.index }
            { ...room }
          />
        ))
      }
    </>
  )
};
