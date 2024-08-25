import * as React from "react";
import { Html } from "@react-three/drei"
import { useAppSelector } from "../../../../hooks";

import { EntityTypes } from "../../../../types";

export default (room: EntityTypes.RoomTypes.RoomMeshType) => {

  const elementLabelsIsShowing = useAppSelector(state => state.toggleElements.elementLabels.isShowing);

  return (
    <Html>
      <h6>{ elementLabelsIsShowing && room.label }</h6>
    </Html>
  )
};