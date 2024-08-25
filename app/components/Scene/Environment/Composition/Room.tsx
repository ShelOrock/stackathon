import React from "react";
const { useRef } = React;
import * as THREE from "three";

import RoomHUD from "./RoomHUD";

import { EntityTypes } from "../../../../types";

export default (room: EntityTypes.RoomTypes.RoomMeshType) => {

  const mesh = useRef<THREE.Mesh>(null!);
  const SCALE_FACTOR: number = 10;

  const translateCoordinatesTo3D = (position: number, dimension: number): number => {
    return (position + dimension / 2) / SCALE_FACTOR;
  };

  interface MeshPropTypes {
    ref: typeof mesh;
    position: [number, number, number];
    castShadow: boolean;
    receiveShadow: boolean;
  };

  const meshProps: MeshPropTypes = {
    ref: mesh,
    position: [
      translateCoordinatesTo3D(room.xPosition, room.width),
      10 * (room.floor + 1) - 5,
      translateCoordinatesTo3D(room.yPosition, room.height)
    ],
    castShadow: true,
    receiveShadow: true
  };

  const roomDimensions: [number, number, number] = [
    room.width / SCALE_FACTOR,
    10,
    room.height / SCALE_FACTOR
  ];

  interface meshMaterialPropTypes {
    color: string;
    metalness: number;
  }

  const meshMaterialProps: meshMaterialPropTypes = {
    color: "#cccccc",
    metalness: 0.2
  }

  return (
    <mesh { ...meshProps }>
      <boxGeometry args={ roomDimensions }/>
      <meshStandardMaterial { ...meshMaterialProps } />
      <RoomHUD { ...room }/>
    </mesh>
  );
};