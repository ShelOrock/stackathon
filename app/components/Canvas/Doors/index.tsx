import * as React from 'react';
import { useTypedSelector } from '../../../utils';

import DoorComponent from './DoorComponent';

import { DoorTypes } from '../../../types';

export default () => {

  const { doors, currentFloor } = useTypedSelector(state => state);

  const renderDoors = () => (
    !!doors.length && doors.map((door: DoorTypes) => {
      return (
        <DoorComponent
          key={ door.index }
          isDisabled={ door.floor !== currentFloor.index }
          { ...door }
        />
      )
    })
  )

  return (
    <>
      { renderDoors() }
    </>
  )
}