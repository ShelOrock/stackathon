import React from 'react';

import CommandButtons from './CommandButtons/CommandButtons';
import FloorList from './FloorList';

import Column from '../Column';

export default () => (
  <Column>
    <CommandButtons />
    <FloorList />
  </Column>
);
