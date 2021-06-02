import * as React from 'react';

import BackButton from './BackButton';
import SunControls from './SunControls/SunControls';
import ToggleLabels from './ToggleLabels';

import * as StyledComponents from '../../StyledComponents';
const { StyledControls: { Controls } } = StyledComponents;

export default () => {
  return (
    <Controls>
      <BackButton />
      <SunControls />
      <ToggleLabels />
    </Controls>
  )
}