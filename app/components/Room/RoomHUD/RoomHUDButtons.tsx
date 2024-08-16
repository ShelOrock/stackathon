import React from 'react';

import DeleteElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/DeleteElementButton';
import LockElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/LockElementButton';
import HideElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/HideElementButton';
import Row from '../../Row';

import { RoomTypes } from '../../../types';
import { AppData } from '../../../enums';

const RoomHUD = (room: RoomTypes) =>(
  <Row>
    <DeleteElementButton type={ AppData.ROOM } { ...room }/>
    <LockElementButton type={ AppData.ROOM } { ...room }/>
    <HideElementButton type={ AppData.ROOM } { ...room } />
  </Row>
);

export default RoomHUD;
