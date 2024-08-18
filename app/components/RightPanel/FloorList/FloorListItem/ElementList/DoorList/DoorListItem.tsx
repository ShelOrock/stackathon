import React from 'react';

import ElementListInterface from '../ElementListInterface';
import * as StyledComponents from '../../../../../StyledComponents';
const { StyledList: { ListItem } } = StyledComponents;

import { DoorTypes, ElementTypes } from '../../../../../../types';
import { AppData } from '../../../../../../enums';

export default (door: DoorTypes) => {

  const doorHUDProps: ElementTypes = {
    type: AppData.Doors,
    ...door
  };

  return (
    <ListItem>
      <ElementListInterface { ...doorHUDProps } />
    </ListItem>
  );
};