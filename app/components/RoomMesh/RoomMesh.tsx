import React, { useRef } from "react";
import * as THREE from "three";

import Mesh from "../Mesh";
import BoxGeometry from "../BoxGeometry";
import MeshPhongMaterial from "../MeshPhongMaterial";
import RoomHUD from "../Scene/Environment/Composition/RoomHUD";
import { ComponentPropTypes } from "./types";

const RoomMesh: React.FC<ComponentPropTypes> = ({
  width,
  height = 10,
  depth,
  xPosition,
  yPosition,
  zPosition,
  label
}) => {

  const ref = useRef<THREE.Mesh>();
  const ROTATION_0_DEGREES: number = 0;

  return (
    <Mesh
      innerRef={ ref }
      xPosition={ xPosition }
      yPosition={ yPosition }
      zPosition={ zPosition }
      xRotation={ ROTATION_0_DEGREES }
      yRotation={ ROTATION_0_DEGREES }
      zRotation={ ROTATION_0_DEGREES }
      castShadow
      receiveShadow
    >
      <BoxGeometry
        width={ width }
        height={ height }
        depth={ depth }
      />
      <MeshPhongMaterial
        color={ "#CCC" }
        shininess={ 0 }
      />
      <RoomHUD label={ label } />
    </Mesh>
  );
};

export default RoomMesh;
