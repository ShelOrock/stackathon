import * as React from 'react';
import { useTypedSelector } from '../../../utils';

import FloorListItem from './FloorListItem';
import * as StyledComponents from '../../StyledComponents';
const { StyledList: { List } } = StyledComponents;

export default () => {

  const { floors } = useTypedSelector(state => state);
  
  return (
    <List>
      { !!floors.length && floors.map(floor => <FloorListItem key={ floor.index } { ...floor } /> )}
    </List>
  )
}