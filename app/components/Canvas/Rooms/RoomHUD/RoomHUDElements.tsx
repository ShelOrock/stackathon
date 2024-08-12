import * as React from 'react';
import { useAppSelector } from '../../../../hooks';

import RoomHUDButtons from './RoomHUDButtons';
import RoomLabelInput from './RoomLabelInput';

import { RoomTypes } from '../../../../types';

export default (room: RoomTypes) => {

  const { toggleLabelInputs } = useAppSelector(state => state);

  return (
    <>
      <RoomHUDButtons { ...room } />
      { toggleLabelInputs && <RoomLabelInput { ...room }/> }
    </>
  )
}