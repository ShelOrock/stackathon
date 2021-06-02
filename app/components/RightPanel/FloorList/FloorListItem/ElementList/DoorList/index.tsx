import * as React from 'react';
import { useTypedSelector } from '../../../../../../utils';

import DoorListItem from './DoorListItem';

import { FloorTypes, DoorTypes } from '../../../../../../types';

export default (floor: FloorTypes) => {

  const { doors } = useTypedSelector(state => state)

  const renderDoors = () => (
    !!doors.length && doors.map((door: DoorTypes) => {
      return floor.index === door.floor && <DoorListItem key={ door.index } { ...door } /> 
    })
  );

  return (
    <>
      { renderDoors() }
    </>
  );
};