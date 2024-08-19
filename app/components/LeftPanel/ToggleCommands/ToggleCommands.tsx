import React from 'react';

import GridToggleButton from './GridToggleButton';
import HUDToggleButton from './HUDToggleButton';
import LabelInputToggleButton from './LabelInputToggleButton';
import CanvasSizeCommands from './CanvasSizeCommands';
import Column from '../../Column';

export default () => {
  return (
    <Column>
      <GridToggleButton />
      <HUDToggleButton />
      <LabelInputToggleButton />
      <CanvasSizeCommands />
    </Column>
  )
}