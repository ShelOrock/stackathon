import React from 'react';

import ElementListInterface from '../ElementListInterface';
import * as StyledComponents from '../../../../../StyledComponents';
const { StyledList: { ListItem } } = StyledComponents;

import { DoorTypes } from '../../../../../../types';
import { AppData } from '../../../../../../enums';

export default (door: DoorTypes) => (
  <ListItem>
    <ElementListInterface type={ AppData.Doors } { ...door } />
  </ListItem>
);