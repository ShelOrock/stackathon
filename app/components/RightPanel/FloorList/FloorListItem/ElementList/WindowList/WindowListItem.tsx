import * as React from 'react';

import ElementListInterface from '../ElementListInterface';
import * as StyledComponents from '../../../../../StyledComponents';
const { StyledList: { ListItem } } = StyledComponents;

import { WindowTypes, ElementTypes } from '../../../../../../types'; 
import { AppData } from '../../../../../../enums';

export default (window: WindowTypes) => {
  
  const windowHUDProps: ElementTypes = {
    type: AppData.WINDOW,
    ...window
  };

  return (
    <ListItem>
      <ElementListInterface { ...windowHUDProps }/>
    </ListItem>
  )
};