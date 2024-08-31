import React, { useRef } from "react";
import * as THREE from "three";

import { EntityTypes } from "../../../../types";
import { Directions } from "../../../../enums";
import Mesh from "../../../Mesh";

const DoorMesh = (door: EntityTypes.DoorTypes.DoorMeshType) => {

  const mesh = useRef<THREE.Mesh>(null!);
  const SCALE_FACTOR: number = 10;
  const ROTATION_0_DEGREES = 0;
  const ROTATION_90_DEGREES = Math.PI / 2

  const translateXCoordinatesTo3D = (door: EntityTypes.DoorTypes.DoorMeshType): number => {
    if(door.orientation == Directions.NORTH_SOUTH) {
     return ((door.xPosition - door.width / 2) + door.width / 2) / SCALE_FACTOR;
    };
    if(door.orientation == Directions.EAST_WEST) {
     return (door.xPosition + door.width / 2) / SCALE_FACTOR;
    };
  };

  const translateYCoordinatesTo3D = (door: EntityTypes.DoorTypes.DoorMeshType): number => {
    if(door.orientation == Directions.NORTH_SOUTH) {
     return ((door.yPosition + door.width / 2) + door.width / 2) / SCALE_FACTOR;
    };
    if(door.orientation == Directions.EAST_WEST) {
      return ((door.yPosition - door.width / 2) + door.width / 2) / SCALE_FACTOR;
    };
  };

  const evaluteDoorDimensions = (door: EntityTypes.DoorTypes.DoorMeshType): [number, number, number] => {
    switch(door.orientation) {
      case Directions.NORTH_SOUTH:
        return [
          door.height / SCALE_FACTOR,
          6,
          door.width / SCALE_FACTOR
        ];

      case Directions.EAST_WEST:
        return [
          door.width / SCALE_FACTOR,
          6,
          door.height / SCALE_FACTOR
        ];

      default:
        return [0, 0, 0];
    };
  };

  interface MeshMaterialPropTypes {
    side: typeof THREE.DoubleSide;
    color: string;
  };

  const meshMaterialProps: MeshMaterialPropTypes = {
    side: THREE.DoubleSide,
    color: "black",
  };

  return (
    <Mesh
      innerRef={ mesh }
      xPosition={ translateXCoordinatesTo3D(door) }
      yPosition={ 10 * (door.floor + 1) - 7 }
      zPosition={ translateYCoordinatesTo3D(door) }
      xRotation={ ROTATION_0_DEGREES }
      yRotation={ door.orientation === Directions.NORTH_SOUTH ? ROTATION_90_DEGREES : ROTATION_0_DEGREES }
      zRotation={ ROTATION_0_DEGREES }
      receiveShadow={ false }
    >
      <boxGeometry args={ evaluteDoorDimensions(door) } />
      <meshStandardMaterial { ...meshMaterialProps } />
    </Mesh>
  );
};

export default DoorMesh;
