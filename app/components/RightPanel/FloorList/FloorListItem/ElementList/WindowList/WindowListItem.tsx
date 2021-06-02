import * as React from 'react';

import ElementListInterface from '../ElementListInterface';
import * as StyledComponents from '../../../../../StyledComponents';
const { StyledList: { ListItem } } = StyledComponents;

import { WindowTypes, ElementTypes } from '../../../../../../types'; 

export default (window: WindowTypes) => {
  
  const windowHUDProps: ElementTypes = {
    type: 'window',
    ...window
  };

  return (
    <ListItem>
      <ElementListInterface { ...windowHUDProps }/>
    </ListItem>
  )
};