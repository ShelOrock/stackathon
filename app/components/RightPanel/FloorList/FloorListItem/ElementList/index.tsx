import React from 'react';

import RoomList from './RoomList';
import DoorList from './DoorList';
import WindowList from './WindowList';

import * as StyledComponents from '../../../../StyledComponents';
const { StyledList: { List } } = StyledComponents;

import { FloorTypes } from '../../../../../types';
import { PaddedDiv } from '../../../../StyledComponents/StyledDiv';

export default (floor: FloorTypes) => {
  return (
    <PaddedDiv>
      <List>
        <RoomList { ...floor } />
        <DoorList { ...floor } />
        <WindowList { ...floor } />
      </List>
    </PaddedDiv>
  )
};