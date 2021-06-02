import * as React from 'react';
import { useTypedSelector } from '../../../utils';

import { Sky } from '@react-three/drei/core/Sky';

export default () => {

  const { sunPosition } = useTypedSelector(state => state);

  return <Sky distance={ 450000 } sunPosition={ [0, 1, parseInt(sunPosition)] } inclination={ 0.5 } azimuth={ 0.75 }/>
}