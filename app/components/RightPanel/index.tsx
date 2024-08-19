import React from 'react';

import CommandButtons from './CommandButtons/CommandButtons';
import FloorList from './FloorList';

import * as StyledComponents from '../StyledComponents';
const { StyledControls: { ControlPanel } } = StyledComponents;

export default () => (
  <ControlPanel>
    <CommandButtons />
    <FloorList />
  </ControlPanel>
);
