import * as React from 'react';
import { useAppSelector } from '../../../../../../hooks';

import DoorListItem from './DoorListItem';

import { FloorTypes, DoorTypes } from '../../../../../../types';

export default (floor: FloorTypes) => {

  const { doors = [] } = useAppSelector(state => state)

  return (
    <>
      { doors.map((door: DoorTypes) => floor.index === door.floor && <DoorListItem key={ door.index } { ...door } /> ) }
    </>
  );
};