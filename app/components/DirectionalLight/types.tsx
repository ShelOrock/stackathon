import THREE from "three";

interface ComponentPropTypes {
  innerRef?: React.Ref<THREE.Mesh>;
  intensity?: number;
  xPosition: number;
  yPosition: number;
  zPosition: number;
  castShadow?: boolean;
  color?: string;
  showHelper?: boolean;
};

export {
  ComponentPropTypes,
};
