import React from "react";
import { useAppSelector } from "../../../hooks";

import { Sky } from "@react-three/drei/core/Sky";

export default () => {

  const { sunPosition } = useAppSelector(state => state);

  return (
    <Sky
      distance={ 450000 }
      sunPosition={ [0, 1, parseInt(sunPosition)] }
      inclination={ 0.5 }
      azimuth={ 0.75 }
    />
  )
};