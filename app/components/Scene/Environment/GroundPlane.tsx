import * as React from 'react';
const { useRef } = React;
import * as THREE from 'three';
import { useTypedSelector } from '../../../utils';

export default () => {

  const { sunPosition } = useTypedSelector(state => state);
  const numericalSunPosition = Math.abs(parseInt(sunPosition))

  const mesh = useRef<THREE.Mesh>(null!);

  interface MeshPropTypes {
    ref: typeof mesh;
    rotation: [number, number, number];
    receiveShadow: boolean;
  }

  const meshProps: MeshPropTypes = {
    ref: mesh,
    rotation: [ -Math.PI / 2, 0, 0 ],
    receiveShadow: true,
  }

  return (
    <mesh { ...meshProps }>
      <planeBufferGeometry args={ [200, 200] } />
      <meshBasicMaterial color={ `rgb(${ 234 - Math.floor(numericalSunPosition * 1.25) }, ${ 209 - Math.floor(numericalSunPosition * 1.25) }, ${ 175 - Math.floor(numericalSunPosition * 1.25) })` } />
    </mesh>
  );
};