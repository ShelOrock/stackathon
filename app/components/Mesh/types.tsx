import THREE from "three";

interface ComponentPropTypes {
  innerRef: React.Ref<THREE.Mesh>;
  xPosition: number;
  yPosition: number;
  zPosition: number;
  xRotation: number;
  yRotation: number;
  zRotation: number;
  castShadow?: boolean;
  receiveShadow?: boolean;
  children: React.ReactNode;
};

export {
  ComponentPropTypes,
};
