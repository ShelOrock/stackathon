import * as React from 'react';
const { useRef, useState } = React;
import * as THREE from 'three';

import { DoorTypes } from '../../../../types';

type Door3DType = DoorTypes & JSX.IntrinsicElements['mesh'];

export default (door: Door3DType) => {

  const mesh = useRef<THREE.Mesh>(null!);
  const SCALE_FACTOR: number = 10;

  const translateCoordinatesTo3D = (position: number, dimension: number): number => {
    return (position + dimension / 2) / SCALE_FACTOR;
  };

  interface MeshPropTypes {
    ref: typeof mesh;
    position: [number, number, number];
    rotation: [number, number, number];
  }

  const meshProps: MeshPropTypes = {
    ref: mesh,
    position: [
      translateCoordinatesTo3D(door.xPos, door.width),
      3,
      translateCoordinatesTo3D(door.yPos, door.width)
    ],
    rotation: door.orientation == 'NS' ? [ 0, Math.PI / 2, 0] : [ 0, 0, 0 ]
  };

  return (
    <mesh { ...meshProps }>
      <planeBufferGeometry args={ door.orientation == 'WE' ? [door.width / SCALE_FACTOR, 6] : [door.height / SCALE_FACTOR, 6]} />
      <meshStandardMaterial side={ THREE.DoubleSide } color={ 'black' } />
    </mesh>
  )
}