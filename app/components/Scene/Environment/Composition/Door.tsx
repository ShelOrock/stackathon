import React, { useRef } from "react";
import * as THREE from "three";

import { EntityTypes } from "../../../../types";
import { Directions } from "../../../../enums";
import Mesh from "../../../Mesh";

const DoorMesh = (door: EntityTypes.DoorTypes.DoorMeshType) => {

  const mesh = useRef<THREE.Mesh>(null!);
  const SCALE_FACTOR: number = 10;

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

  const evaluateRotation = (door: EntityTypes.DoorTypes.DoorMeshType): [number, number, number] => {
    switch(door.orientation) {
      case Directions.NORTH_SOUTH:
        return [0, Math.PI / 2, 0];

      case Directions.EAST_WEST:
        return [0, 0, 0];

      default: 
        return [0, 0, 0];
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

  interface MeshPropTypes {
    ref: typeof mesh;
    position: [number, number, number];
    rotation: [number, number, number];
  };

  interface MeshMaterialPropTypes {
    side: typeof THREE.DoubleSide;
    color: string;
  };

  const meshProps: MeshPropTypes = {
    ref: mesh,
    position: [
      translateXCoordinatesTo3D(door),
      10 * (door.floor + 1) - 7,
      translateYCoordinatesTo3D(door)
    ],
    rotation: evaluateRotation(door),
  };

  const meshMaterialProps: MeshMaterialPropTypes = {
    side: THREE.DoubleSide,
    color: "black",
  };

  return (
    <Mesh
      innerRef={ mesh }
      position={ [
        translateXCoordinatesTo3D(door),
        10 * (door.floor + 1) - 7,
        translateYCoordinatesTo3D(door)
      ] }
      rotation={ evaluateRotation(door) }
      receiveShadow={ false }
    >
      <boxGeometry args={ evaluteDoorDimensions(door) } />
      <meshStandardMaterial { ...meshMaterialProps } />
    </Mesh>
  );
};

export default DoorMesh;
