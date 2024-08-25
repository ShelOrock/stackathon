import { EntityTypes } from ".";

interface RoomTypes extends EntityTypes.ElementTypes {
  zAxis?: number;
  floor?: number;
  tag?: string;
};

type RoomMeshType = RoomTypes & JSX.IntrinsicElements["mesh"];

export {
  RoomTypes,
  RoomMeshType
};
