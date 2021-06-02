import * as React from 'react';
const { useRef } = React;
import * as THREE from 'three';

import RoomHUD from './RoomHUD';

import { RoomTypes } from '../../../../types';

type Room3DType = RoomTypes & JSX.IntrinsicElements['mesh']

export default (room: Room3DType) => {

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
  }

  const meshProps: MeshPropTypes = {
    ref: mesh,
    position: [
      translateCoordinatesTo3D(room.xPos, room.width),
      10 * (room.floor + 1) - 5,
      translateCoordinatesTo3D(room.yPos, room.height)
    ],
    castShadow: true,
    receiveShadow: true
  }

  return (
    <mesh { ...meshProps }>
      <boxGeometry args={ [room.width / SCALE_FACTOR, 10, room.height / SCALE_FACTOR] }/>
      <meshStandardMaterial color={ 'hotpink' } metalness={ 0.2 } />
      <RoomHUD { ...room }/>
    </mesh>
  );
};