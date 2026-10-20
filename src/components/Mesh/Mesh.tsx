import React from "react";

import { ComponentPropTypes } from "./types";

const Mesh: React.FC<ComponentPropTypes> = ({
  innerRef,
  xPosition,
  yPosition,
  zPosition,
  xRotation,
  yRotation,
  zRotation,
  castShadow,
  receiveShadow,
  children
}) => (
  <mesh
    ref={ innerRef }
    position={ [ xPosition, yPosition, zPosition ] }
    rotation={ [ xRotation, yRotation, zRotation ] }
    castShadow={ castShadow }
    receiveShadow={ receiveShadow }
  >{ children }</mesh>
);

export default Mesh;
