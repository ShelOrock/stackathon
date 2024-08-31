import React from "react";
import * as THREE from "three";

import { ComponentPropTypes } from "./types";

const MeshPhongMaterial: React.FC<ComponentPropTypes> = ({
  color,
  shininess,
  doubleSided = false
}) => (
  <meshPhongMaterial
    color={ color }
    shininess={ shininess }
    side={ doubleSided ? THREE.DoubleSide : THREE.FrontSide }
  />
);

export default MeshPhongMaterial;
