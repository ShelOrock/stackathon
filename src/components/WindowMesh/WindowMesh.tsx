import React, { useRef } from "react";
import * as THREE from "three";

import Mesh from "../Mesh";
import BoxGeometry from "../BoxGeometry";
import MeshPhongMaterial from "../MeshPhongMaterial";

const WindowMesh = ({
  width,
  height,
  depth,
  xPosition,
  yPosition,
  zPosition,
  xRotation,
  yRotation,
  zRotation
}) => {

  const mesh = useRef<THREE.Mesh>(null!);

  return (
    <Mesh
      innerRef={ mesh }
      xPosition={ xPosition }
      yPosition={ yPosition }
      zPosition={ zPosition }
      xRotation={ xRotation }
      yRotation={ yRotation }
      zRotation={ zRotation }
      receiveShadow={ false }
    >
      <BoxGeometry 
        width={ width }
        height={ height }
        depth={ depth }
      />
      <MeshPhongMaterial 
        color="#000"
        shininess={ 100 }
        doubleSided
      />
    </Mesh>
  );
};

export default WindowMesh;
