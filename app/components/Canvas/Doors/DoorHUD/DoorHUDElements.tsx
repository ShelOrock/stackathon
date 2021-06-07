import * as React from 'react';
import { useTypedSelector } from '../../../../utils';

import DoorHUDButtons from './DoorHUDButton';
import DoorLabelInputs from './DoorLabelInputs';

import { DoorTypes } from '../../../../types';

export default (door: DoorTypes) => {

  const { toggleLabelInputs } = useTypedSelector(state => state);
  return (
    <>
      <DoorHUDButtons { ...door } />
      { toggleLabelInputs && <DoorLabelInputs { ...door } /> }
    </>
  )
}