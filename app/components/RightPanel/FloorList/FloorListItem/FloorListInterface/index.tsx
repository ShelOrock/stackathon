import * as React from 'react';
import { useAppSelector } from '../../../../../hooks';

import SelectFloorButton from './SelectFloorButton';
import HideFloorElementsButton from './HideFloorElementsButton';
import DeleteFloorButton from './DeleteFloorButton';

import { FloorTypes } from '../../../../../types';

export default (floor: FloorTypes) => {

  const { floors } = useAppSelector(state => state)

  return (
    <>
      <SelectFloorButton { ...floor } />
      <HideFloorElementsButton { ...floor } />
      { floors.length > 1 && <DeleteFloorButton { ...floor } /> }
    </>
  )
};