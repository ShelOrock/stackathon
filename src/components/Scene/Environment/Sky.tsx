import React from "react";
import { useAppSelector } from "../../../hooks";

import { Sky } from "@react-three/drei/core/Sky";

export default () => {

  const { sunPosition } = useAppSelector(state => state);

  return (
    <Sky
      distance={ 450000 }
      sunPosition={ [parseInt(sunPosition), Math.cos((parseInt(sunPosition) * 1.8) * (Math.PI / 180)) * 50, 0] }
      inclination={ 0.5 }
      azimuth={ 0.75 }
    />
  )
};