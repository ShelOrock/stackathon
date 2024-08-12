import * as React from 'react';

import SunSlider from './SunSlider';
import ResetSunButton from './ResetSunButton';
import Row from '../../../Row';

export default () => {
  return (
    <Row>
      <SunSlider/>
      <ResetSunButton />
    </Row>
  )
}