import React from "react";
const { useRef } = React;
import * as THREE from "three";

import { EntityTypes } from "../../../../types";
import { Directions } from "../../../../enums";

export default (window: EntityTypes.WindowTypes.WindowMeshType) => {

  const mesh = useRef<THREE.Mesh>(null!);
  const SCALE_FACTOR: number = 10;
  const TRANSLATION_FACTOR: number = 2;
  const ROTATION_90_DEGREES: number = Math.PI / 2;
  const ROTATION_0_DEGREES: number = 0;
  const WINDOW_THICKNESS: number = 2.5;
  const DEFAULT_DIMENSION: number = 0;

  const translateXCoordinatesTo3D = (window: EntityTypes.WindowTypes.WindowMeshType): number => {
    if(window.orientation == Directions.NORTH_SOUTH) {
      return ((window.xPosition - window.width / TRANSLATION_FACTOR) + window.width / TRANSLATION_FACTOR) / SCALE_FACTOR;
    };
    if(window.orientation == Directions.EAST_WEST) {
      return (window.xPosition + window.width / TRANSLATION_FACTOR) / SCALE_FACTOR
    };
  };

  const translateYCoordinatesTo3D = (window: EntityTypes.WindowTypes.WindowMeshType): number => {
    if(window.orientation == Directions.NORTH_SOUTH) {
      return ((window.yPosition + window.width / TRANSLATION_FACTOR) + window.height / TRANSLATION_FACTOR) / SCALE_FACTOR;
    };
    if(window.orientation == Directions.EAST_WEST) {
      return ((window.yPosition - window.width / TRANSLATION_FACTOR) + window.width / TRANSLATION_FACTOR) / SCALE_FACTOR;
    };
  };

  const evaluateRotation = (window: EntityTypes.WindowTypes.WindowMeshType): [number, number, number] => {
    switch(window.orientation) {
      case Directions.NORTH_SOUTH:
        return [ROTATION_0_DEGREES, ROTATION_90_DEGREES, ROTATION_0_DEGREES];

      case Directions.EAST_WEST:
        return [ROTATION_0_DEGREES, ROTATION_0_DEGREES, ROTATION_0_DEGREES];

      default: 
        return [ROTATION_0_DEGREES, ROTATION_0_DEGREES, ROTATION_0_DEGREES];
    };
  };

  const evaluateWindowDimensions = (window: EntityTypes.WindowTypes.WindowMeshType): [number, number, number] => {
    switch(window.orientation) {
      case Directions.NORTH_SOUTH:
        return [
          window.height / SCALE_FACTOR,
          WINDOW_THICKNESS,
          window.width / SCALE_FACTOR
        ];

      case Directions.EAST_WEST:
        return [
          window.width / SCALE_FACTOR,
          WINDOW_THICKNESS,
          window.height / SCALE_FACTOR
        ];

      default:
        return [DEFAULT_DIMENSION, DEFAULT_DIMENSION, DEFAULT_DIMENSION];
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
  }

  const meshProps: MeshPropTypes = {
    ref: mesh,
    position: [
      translateXCoordinatesTo3D(window),
      10 * (window.floor + 1) - 4,
      translateYCoordinatesTo3D(window)
    ],
    rotation: evaluateRotation(window),
  };

  const meshMaterialProps: MeshMaterialPropTypes = {
    side: THREE.DoubleSide,
    color: "black",
  };

  return (
    <mesh { ...meshProps }>
      <boxGeometry args={ evaluateWindowDimensions(window) } />
      <meshStandardMaterial { ...meshMaterialProps } />
    </mesh>
  )
};