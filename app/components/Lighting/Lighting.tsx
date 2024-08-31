import React, { useRef } from "react";
import { useAppSelector } from "../../hooks";

import DirectionalLight from "../DirectionalLight";
import { ComponentPropTypes } from "./types";

const Lighting: React.FC<ComponentPropTypes> = () => {

  const directionalLight = useRef();

  const sunPosition = useAppSelector(state => state.sunPosition);

  const SUN_POSITION_SCALE_FACTOR = 2.5;

  return (
    <>
      <ambientLight
        color="#FFF"
        intensity={ 0.6 }
      />
      <DirectionalLight
        innerRef={ directionalLight }
        xPosition={ parseInt(sunPosition) * SUN_POSITION_SCALE_FACTOR }
        yPosition={ Math.cos((parseInt(sunPosition) * 1.8) * (Math.PI / 180)) * 50 }
        zPosition={ 30 }
        castShadow
      />
    </>
  );
};

export default Lighting;
