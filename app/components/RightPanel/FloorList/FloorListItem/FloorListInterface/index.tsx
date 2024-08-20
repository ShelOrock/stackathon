import * as React from 'react';
import { useAppSelector } from '../../../../../hooks';

import SelectFloorButton from './SelectFloorButton';
import HideFloorElementsButton from './HideFloorElementsButton';
import DeleteFloorButton from './DeleteFloorButton';

import { FloorTypes } from '../../../../../types';
import { AppDataSelectors } from '../../../../../redux/selectors';
import { AppData } from '../../../../../enums';
import Row from '../../../../Row';

export default (floor: FloorTypes) => {

  const floors = useAppSelector(AppDataSelectors.selectAppData(AppData.Floors));

  return (
    <Row>
      <SelectFloorButton { ...floor } />
      <HideFloorElementsButton { ...floor } />
      { floors.length && <DeleteFloorButton /> }
    </Row>
  )
};