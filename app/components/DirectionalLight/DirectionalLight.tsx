import { useHelper } from "@react-three/drei";
import React from "react";
import { DirectionalLightHelper } from "three";

const DirectionalLight = ({
  innerRef,
  xPosition,
  yPosition,
  zPosition,
  intensity = 1,
  color = "#FFF",
  castShadow = true,
  showHelper = false
}) => {

  if(showHelper) {
    useHelper(innerRef, DirectionalLightHelper)
  };

  return (
    <directionalLight
      ref={ innerRef }
      position={ [ xPosition, yPosition, zPosition ] }
      intensity={ intensity }
      color={ color }
      shadow-mapSize={ [ 1024, 1024 ]}
      castShadow={ castShadow }
    >
      <orthographicCamera attach="shadow-camera" args={[-100, 100, 100, -100]} />
    </directionalLight>
  );
};

export default DirectionalLight;
