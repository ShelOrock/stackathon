import React from "react";
import { Html } from "@react-three/drei"
import { useAppSelector } from "../../../../hooks";

const RoomHUD = ({ label }) => {

  const elementLabelsIsShowing = useAppSelector(state => state.toggleElements.elementLabels.isShowing);

  return (
    <Html>
      <h6>{ elementLabelsIsShowing && label }</h6>
    </Html>
  )
};

export default RoomHUD;
