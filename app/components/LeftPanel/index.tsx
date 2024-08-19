import React from 'react';

import ToggleCommands from './ToggleCommands/ToggleCommands';
import Toolbar from './Toolbar';
import * as StyledComponents from '../StyledComponents';
const { StyledControls: { ControlPanel } } = StyledComponents;

export default () => {
  return (
    <ControlPanel>
      <ToggleCommands />
      <Toolbar />
    </ControlPanel>
  )
}