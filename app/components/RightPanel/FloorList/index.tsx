import React from 'react';
import { useAppSelector } from '../../../hooks';

import FloorListItem from './FloorListItem';
import * as StyledComponents from '../../StyledComponents';
import ComponentMapping from "../../ComponentMapping";
import { AppDataSelectors } from '../../../redux/selectors';
import { AppData } from '../../../enums';
const { StyledList: { List } } = StyledComponents;

export default () => {

  const floors = useAppSelector(AppDataSelectors.selectAppData(AppData.Floors));
  
  return (
    <List>
      <ComponentMapping
        componentData={ floors }
        renderComponent={ floor => <FloorListItem { ...floor } /> }
      />
    </List>
  );
};
