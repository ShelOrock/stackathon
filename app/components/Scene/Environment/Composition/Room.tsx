import React, { useRef } from "react";
import * as THREE from "three";

import RoomHUD from "./RoomHUD";

import Mesh from "../../../Mesh";
import BoxGeometry from "../../../BoxGeometry";

const Room = ({
  width,
  height = 10,
  depth,
  xPosition,
  yPosition,
  zPosition,
  label
}) => {

  const ref = useRef<THREE.Mesh>(null!);
  const ROTATION_0_DEGREES: number = 0;

  interface meshMaterialPropTypes {
    color: string;
    metalness: number;
  }

  const meshMaterialProps: meshMaterialPropTypes = {
    color: "#cccccc",
    metalness: 0.2
  }

  return (
    <Mesh
      innerRef={ ref }
      position={ [
        xPosition,
        yPosition,
        zPosition
      ] }
      rotation={ [
        ROTATION_0_DEGREES,
        ROTATION_0_DEGREES,
        ROTATION_0_DEGREES
      ] }
      castShadow
      receiveShadow
    >
      <BoxGeometry
        width={ width }
        height={ height }
        depth={ depth }
      />
      <meshPhongMaterial { ...meshMaterialProps } />
      <RoomHUD label={ label } />
    </Mesh>
  );
};

export default Room;
