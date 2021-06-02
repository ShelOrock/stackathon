import * as React from 'react';

import ElementListInterface from '../ElementListInterface';
import * as StyledComponents from '../../../../../StyledComponents';
const { StyledList: { ListItem } } = StyledComponents;

import { DoorTypes, ElementTypes } from '../../../../../../types';

export default (door: DoorTypes) => {

  const doorHUDProps: ElementTypes = {
    type: 'door',
    ...door
  };

  return (
    <ListItem>
      <ElementListInterface { ...doorHUDProps } />
    </ListItem>
  );
};