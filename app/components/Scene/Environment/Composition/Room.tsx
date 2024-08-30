import React, { useRef } from "react";
import * as THREE from "three";

import RoomHUD from "./RoomHUD";

import { EntityTypes } from "../../../../types";
import Mesh from "../../../Mesh";

export default (room: EntityTypes.RoomTypes.RoomMeshType) => {

  const ref = useRef<THREE.Mesh>(null!);
  const SCALE_FACTOR: number = 10;
  const ROTATION_0_DEGREES: number = 0;

  const translateCoordinatesTo3D = (position: number, dimension: number): number => {
    return (position + dimension / 2) / SCALE_FACTOR;
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
    <Mesh
      innerRef={ ref }
      position={ [
        translateCoordinatesTo3D(room.xPosition, room.width),
        10 * (room.floor) - 5,
        translateCoordinatesTo3D(room.yPosition, room.height)
      ] }
      rotation={ [
        ROTATION_0_DEGREES,
        ROTATION_0_DEGREES,
        ROTATION_0_DEGREES
      ] }
      castShadow
      receiveShadow
    >
      <boxGeometry args={ roomDimensions }/>
      <meshPhongMaterial { ...meshMaterialProps } />
      <RoomHUD { ...room }/>
    </Mesh>
  );
};