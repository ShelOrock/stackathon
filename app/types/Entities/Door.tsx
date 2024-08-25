import { EntityTypes } from ".";
import { Directions } from "../../enums";

interface DoorTypes extends EntityTypes.ElementTypes {
  orientation: Directions;
  floor: number;
};

type DoorMeshType = DoorTypes & JSX.IntrinsicElements["mesh"];

export {
  DoorTypes,
  DoorMeshType
};
