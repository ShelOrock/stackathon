import * as React from 'react';

import DeleteElementButton from '../../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/DeleteElementButton';
import LockElementButton from '../../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/LockElementButton';
import HideElementButton from '../../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/HideElementButton';
import Row from "../../../Row";

import { DoorTypes, ElementTypes } from '../../../../types';

export default (door: DoorTypes) => {

  const doorHUDProps: ElementTypes = {
    type: 'door',
    ...door
  }

  return (
    <Row>
      <DeleteElementButton { ...doorHUDProps } />
      <LockElementButton { ...doorHUDProps } />
      <HideElementButton { ...doorHUDProps } />
    </Row>
  )
}