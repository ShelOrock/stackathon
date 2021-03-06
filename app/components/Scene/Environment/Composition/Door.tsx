import * as React from 'react';
const { useRef } = React;
import * as THREE from 'three';

import { Door3DTypes } from '../../../../types';

export default (door: Door3DTypes) => {

  const mesh = useRef<THREE.Mesh>(null!);
  const SCALE_FACTOR: number = 10;

  const translateXCoordinatesTo3D = (door: Door3DTypes): number => {
    if(door.orientation == 'NS') {
     return ((door.xPos - door.width / 2) + door.width / 2) / SCALE_FACTOR;
    };
    if(door.orientation == 'WE') {
     return (door.xPos + door.width / 2) / SCALE_FACTOR;
    };
  };

  const translateYCoordinatesTo3D = (door: Door3DTypes): number => {
    if(door.orientation == 'NS') {
     return ((door.yPos + door.width / 2) + door.width / 2) / SCALE_FACTOR;
    };
    if(door.orientation == 'WE') {
      return ((door.yPos - door.width / 2) + door.width / 2) / SCALE_FACTOR;
    };
  };

  const evaluateRotation = (door: Door3DTypes): [number, number, number] => {
    switch(door.orientation) {
      case 'NS':
        return [0, Math.PI / 2, 0];

      case 'WE':
        return [0, 0, 0];

      default: 
        return [0, 0, 0];
    };
  };

  const evaluteDoorDimensions = (door: Door3DTypes): [number, number, number] => {
    switch(door.orientation) {
      case 'NS':
        return [
          door.height / SCALE_FACTOR,
          6,
          door.width / SCALE_FACTOR
        ];

      case 'WE':
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
    color: 'black',
  };

  return (
    <mesh { ...meshProps }>
      <boxGeometry args={ evaluteDoorDimensions(door) } />
      <meshStandardMaterial { ...meshMaterialProps } />
    </mesh>
  )
}