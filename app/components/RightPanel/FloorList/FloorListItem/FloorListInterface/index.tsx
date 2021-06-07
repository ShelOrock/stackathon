import * as React from 'react';
import { useTypedSelector } from '../../../../../utils';

import SelectFloorButton from './SelectFloorButton';
import HideFloorElementsButton from './HideFloorElementsButton';
import DeleteFloorButton from './DeleteFloorButton';

import { FloorTypes } from '../../../../../types';

export default (floor: FloorTypes) => {

  const { floors } = useTypedSelector(state => state)

  return (
    <>
      <SelectFloorButton { ...floor } />
      <HideFloorElementsButton { ...floor } />
      { floors.length > 1 && <DeleteFloorButton { ...floor } /> }
    </>
  )
};