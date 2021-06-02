import * as React from 'react';
import { useTypedSelector } from '../../../utils';

export default () => {

  const { sunPosition } = useTypedSelector(state => state);
  return (
    <>
      <ambientLight />
      {/* <spotLight
        castShadow
        intensity={ 0.5 }
        position={[0, 1, parseInt(sunPosition)]}
        angle={-Math.PI/3}
        color='blue'/> */}
      <directionalLight
        castShadow
        position={[0, 1, parseInt(sunPosition)]} color="hotpink" />
    </>
  );
};