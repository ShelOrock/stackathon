import React from 'react';

import DeleteElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/DeleteElementButton';
import LockElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/LockElementButton';
import HideElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/HideElementButton';
import Row from '../../Row';

import { WindowTypes } from '../../../types';
import { AppData } from '../../../enums';

const WindowHUD = (window: WindowTypes) => (
  <Row>
    <DeleteElementButton type={ AppData.WINDOW} { ...window } />
    <LockElementButton type={ AppData.WINDOW} { ...window } />
    <HideElementButton type={ AppData.WINDOW} { ...window } />
  </Row>
);

export default WindowHUD;
