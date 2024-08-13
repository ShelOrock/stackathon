import * as React from 'react';

import DeleteElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/DeleteElementButton';
import LockElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/LockElementButton';
import HideElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/HideElementButton';
import Row from '../../Row';

import { WindowTypes, ElementTypes } from '../../../types';

export default (window: WindowTypes) => {

  const windowHUDProps: ElementTypes = {
    type: 'window',
    ...window
  }
  return (
    <Row>
      <DeleteElementButton { ...windowHUDProps } />
      <LockElementButton { ...windowHUDProps } />
      <HideElementButton { ...windowHUDProps } />
    </Row>
  )
}