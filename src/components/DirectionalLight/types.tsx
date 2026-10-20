import { Object3D, Object3DEventMap } from "three";

interface ComponentPropTypes {
  innerRef?: React.RefObject<Object3D>;
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
