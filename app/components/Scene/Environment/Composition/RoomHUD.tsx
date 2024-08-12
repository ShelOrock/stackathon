import * as React from 'react';
import { Html } from "@react-three/drei"
import { useAppSelector } from '../../../../hooks';

import { RoomTypes } from '../../../../types';

type Room3DType = RoomTypes & JSX.IntrinsicElements['mesh']

export default (room: Room3DType) => {

  const elementLabelsIsShowing = useAppSelector(state => state.toggleElements.elementLabels.isShowing);

  return (
    <Html>
      <h6>{ elementLabelsIsShowing && room.label }</h6>
    </Html>
  )
};