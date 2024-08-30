import THREE from "three";

type Position = [ number, number, number ];
type Rotation = [ number, number, number ];

interface ComponentPropTypes {
  innerRef: React.Ref<THREE.Mesh>;
  position: Position;
  rotation: Rotation;
  castShadow?: boolean;
  receiveShadow?: boolean;
  children: React.ReactNode;
};

export {
  ComponentPropTypes,
};
