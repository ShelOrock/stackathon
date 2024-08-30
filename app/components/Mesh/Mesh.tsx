import React from "react";

import { ComponentPropTypes } from "./types";

const Mesh: React.FC<ComponentPropTypes> = ({
  innerRef,
  position,
  rotation,
  castShadow,
  receiveShadow,
  children
}) => (
  <mesh
    ref={ innerRef }
    position={ position }
    rotation={ rotation }
    castShadow={ castShadow }
    receiveShadow={ receiveShadow }
  >{ children }</mesh>
);

export default Mesh;
