import * as React from 'react';
import { useAppSelector } from '../../../../hooks';

import DoorHUDButtons from './DoorHUDButton';
import DoorLabelInputs from './DoorLabelInputs';

import { DoorTypes } from '../../../../types';

export default (door: DoorTypes) => {

  const { toggleLabelInputs } = useAppSelector(state => state);
  
  return (
    <>
      <DoorHUDButtons { ...door } />
      { toggleLabelInputs && <DoorLabelInputs { ...door } /> }
    </>
  )
}