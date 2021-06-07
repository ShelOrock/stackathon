import * as React from 'react';
import { useTypedSelector } from '../../../../utils';

import RoomHUDButtons from './RoomHUDButtons';
import RoomLabelInput from './RoomLabelInput';

import { RoomTypes } from '../../../../types';

export default (room: RoomTypes) => {

  const { toggleLabelInputs } = useTypedSelector(state => state);

  return (
    <>
      <RoomHUDButtons { ...room } />
      { toggleLabelInputs && <RoomLabelInput { ...room }/> }
    </>
  )
}