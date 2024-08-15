import * as React from 'react';

import DeleteElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/DeleteElementButton';
import LockElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/LockElementButton';
import HideElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/HideElementButton';
import Row from '../../Row';

import { RoomTypes, ElementTypes } from '../../../types';
import { AppData } from '../../../enums';

export default (room: RoomTypes) => {

  const roomHUDProps: ElementTypes = {
    type: AppData.ROOM,
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