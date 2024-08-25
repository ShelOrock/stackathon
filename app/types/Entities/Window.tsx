import { EntityTypes } from ".";
import { Directions } from "../../enums";

interface WindowTypes extends EntityTypes.ElementTypes {
  orientation?: Directions;
  floor?: number;
  tag?: string;
};

type WindowMeshType = WindowTypes & JSX.IntrinsicElements["mesh"];

export {
  WindowTypes,
  WindowMeshType
};
