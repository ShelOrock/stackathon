import React from 'react';
import { useAppSelector } from '../../../hooks';

import FloorListItem from './FloorListItem';
import * as StyledComponents from '../../StyledComponents';
import ComponentMapping from "../../ComponentMapping";
const { StyledList: { List } } = StyledComponents;

export default () => {

  const { floors = [] } = useAppSelector(state => state);
  
  return (
    <List>
      <ComponentMapping
        componentData={ floors }
        renderComponent={ (floor: { index }) => <FloorListItem { ...floor } /> }
      />
    </List>
  );
};
