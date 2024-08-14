import * as React from 'react';
import { useAppSelector } from '../../../hooks';

import DoorHUDButtons from './DoorHUDButton';
import DoorLabelInputs from './DoorLabelInputs';

import { DoorTypes } from '../../../types';

export default (door: DoorTypes) => {

  const elementLabelsIsShowing = useAppSelector(state => state.toggleElements.elementLabels.isShowing);
  
  return (
    <>
      <DoorHUDButtons { ...door } />
      { elementLabelsIsShowing && <DoorLabelInputs { ...door } /> }
    </>
  )
}