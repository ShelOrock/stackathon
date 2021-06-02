import * as React from 'react';

import SelectFloorButton from './SelectFloorButton';
import HideFloorElementsButton from './HideFloorElementsButton';

import { FloorTypes } from '../../../../../types';

export default (floor: FloorTypes) => {

  return (
    <>
      <SelectFloorButton { ...floor } />
      <HideFloorElementsButton { ...floor } />
    </>
  )
};