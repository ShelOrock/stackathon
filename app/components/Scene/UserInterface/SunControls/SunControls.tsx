import * as React from 'react';

import SunSlider from './SunSlider';
import ResetSunButton from './ResetSunButton';
import * as StyledComponents from '../../../StyledComponents';
const { StyledDiv: { Row } } = StyledComponents;

export default () => {
  return (
    <Row>
      <SunSlider/>
      <ResetSunButton />
    </Row>
  )
}