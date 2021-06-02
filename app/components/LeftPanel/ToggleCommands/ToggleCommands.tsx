import * as React from 'react';

import GridToggleButton from './GridToggleButton';
import HUDToggleButton from './HUDToggleButton';
import LabelInputToggleButton from './LabelInputToggleButton';
import CanvasSizeCommands from './CanvasSizeCommands';
import * as StyledComponents from '../../StyledComponents';
const { StyledDiv: { Column } } = StyledComponents;

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