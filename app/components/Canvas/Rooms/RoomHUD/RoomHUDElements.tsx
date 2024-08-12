import * as React from 'react';
import { useAppSelector } from '../../../../hooks';

import RoomHUDButtons from './RoomHUDButtons';
import RoomLabelInput from './RoomLabelInput';

import { RoomTypes } from '../../../../types';

export default (room: RoomTypes) => {

  const elementLabelsIsShowing = useAppSelector(state => state.toggleElements.elementLabels.isShowing);

  return (
    <>
      <RoomHUDButtons { ...room } />
      { elementLabelsIsShowing && <RoomLabelInput { ...room }/> }
    </>
  )
}