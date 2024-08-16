import React from 'react';

import DeleteElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/DeleteElementButton';
import LockElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/LockElementButton';
import HideElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/HideElementButton';
import Row from "../../Row";

import { DoorTypes } from '../../../types';
import { AppData } from '../../../enums';

const DoorHUD = (door: DoorTypes) => (
  <Row>
    <DeleteElementButton type={ AppData.DOOR } { ...door } />
    <LockElementButton type={ AppData.DOOR } { ...door } />
    <HideElementButton type={ AppData.DOOR } { ...door } />
  </Row>
)

export default DoorHUD;
