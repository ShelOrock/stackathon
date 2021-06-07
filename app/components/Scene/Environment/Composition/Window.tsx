import * as React from 'react';
const { useRef } = React;
import * as THREE from 'three';

import { Window3DTypes } from '../../../../types';

export default (window: Window3DTypes) => {

  const mesh = useRef<THREE.Mesh>(null!);
  const SCALE_FACTOR: number = 10;

  const translateXCoordinatesTo3D = (window: Window3DTypes): number => {
    if(window.orientation == 'NS') {
      return ((window.xPos - window.width / 2) + window.width / 2) / SCALE_FACTOR;
    };
    if(window.orientation == 'WE') {
      return (window.xPos + window.width / 2) / SCALE_FACTOR
    };
  };

  const translateYCoordinatesTo3D = (window: Window3DTypes): number => {
    if(window.orientation == 'NS') {
      return ((window.yPos + window.width / 2) + window.height / 2) / SCALE_FACTOR;
    };
    if(window.orientation == 'WE') {
      return ((window.yPos - window.width / 2) + window.width / 2) / SCALE_FACTOR;
    };
  };

  const evaluateRotation = (window: Window3DTypes): [number, number, number] => {
    switch(window.orientation) {
      case 'NS':
        return [0, Math.PI / 2, 0];

      case 'WE':
        return [0, 0, 0];

      default: 
        return [0, 0, 0];
    };
  };

  const evaluateWindowDimensions = (window: Window3DTypes): [number, number, number] => {
    switch(window.orientation) {
      case 'NS':
        return [
          window.height / SCALE_FACTOR,
          2.5,
          window.width / SCALE_FACTOR
        ];

      case 'WE':
        return [
          window.width / SCALE_FACTOR,
          2.5,
          window.height / SCALE_FACTOR
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
    color: 'black',
  };

  return (
    <mesh { ...meshProps }>
      <boxGeometry args={ evaluateWindowDimensions(window) } />
      <meshStandardMaterial { ...meshMaterialProps } />
    </mesh>
  )
};