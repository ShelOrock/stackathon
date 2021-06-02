import * as React from 'react';

import FloorListInterface from './FloorListInterface';
import ElementList from './ElementList';
import * as StyledComponents from '../../../StyledComponents';
const { StyledList: { ListItem } } = StyledComponents;

import { FloorTypes } from '../../../../types';

export default (floor: FloorTypes) => {

  return (
    <>
      <ListItem>
        <FloorListInterface { ...floor } />
      </ListItem>
      { !floor.isHidden && <ElementList { ...floor } /> }
    </>
  )
};