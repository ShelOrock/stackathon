import * as React from 'react';
const { useRef } = React;
import * as THREE from 'three';

export default () => {

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
      <meshBasicMaterial color={ 'beige' } />
    </mesh>
  );
};