import * as React from 'react';
import { useAppSelector } from '../../hooks';

import DoorComponent from './DoorComponent';

import { DoorTypes } from '../../types';

export default () => {

  const { doors, currentFloor } = useAppSelector(state => state);

  return (
    <>
      {
        !!doors.length && doors.map((door: DoorTypes) => (
          <DoorComponent
            key={ door.index }
            isDisabled={ door.floor !== currentFloor.index }
            { ...door }
          />
        ))
      }
    </>
  )
}