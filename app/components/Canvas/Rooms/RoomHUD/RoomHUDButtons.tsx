import * as React from 'react';

import DeleteElementButton from '../../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/DeleteElementButton';
import LockElementButton from '../../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/LockElementButton';
import HideElementButton from '../../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/HideElementButton';
import * as StyledComponents from '../../../StyledComponents';
const { StyledDiv: { Row } } = StyledComponents;

import { RoomTypes, ElementTypes } from '../../../../types';

export default (room: RoomTypes) => {

  const roomHUDProps: ElementTypes = {
    type: 'room',
    ...room
  };

  return (
    <Row>
      <DeleteElementButton { ...roomHUDProps }/>
      <LockElementButton { ...roomHUDProps }/>
      <HideElementButton { ...roomHUDProps } />
    </Row>
  )
}