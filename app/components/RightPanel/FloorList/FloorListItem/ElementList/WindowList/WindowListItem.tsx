import React from 'react';

import ElementListInterface from '../ElementListInterface';
import * as StyledComponents from '../../../../../StyledComponents';
const { StyledList: { ListItem } } = StyledComponents;

import { WindowTypes } from '../../../../../../types'; 
import { AppData } from '../../../../../../enums';

export default (window: WindowTypes) => (
  <ListItem>
    <ElementListInterface type={ AppData.Windows } { ...window }/>
  </ListItem>
);
