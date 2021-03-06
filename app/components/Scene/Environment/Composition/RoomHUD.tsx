import * as React from 'react';
import { Html } from "@react-three/drei"
import { useTypedSelector } from '../../../../utils';

import { RoomTypes } from '../../../../types';

type Room3DType = RoomTypes & JSX.IntrinsicElements['mesh']

export default (room: Room3DType) => {

  const { toggleLabels } = useTypedSelector(state => state)

  return (
    <Html>
      <h6>{ toggleLabels && room.label }</h6>
    </Html>
  )
};