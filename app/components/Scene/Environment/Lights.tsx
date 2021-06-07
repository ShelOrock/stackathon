import * as React from 'react';
import { useTypedSelector } from '../../../utils';

export default () => {

  const { sunPosition } = useTypedSelector(state => state);
  return (
    <>
      <ambientLight />
      <directionalLight
        castShadow
        position={[0, 1, parseInt(sunPosition)]} color="#DDD" />
    </>
  );
};