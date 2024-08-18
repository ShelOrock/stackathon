import React from 'react';
import { useAppSelector } from '../../../../../../hooks';

import DoorListItem from './DoorListItem';

import { FloorTypes } from '../../../../../../types';
import ComponentMapping from '../../../../../ComponentMapping';
import { AppDataSelectors } from '../../../../../../redux/selectors';
import { AppData } from '../../../../../../enums';

export default (floor: FloorTypes) => {

  const doors = useAppSelector(AppDataSelectors.selectAppData(AppData.DOORS));

  return (
    <ComponentMapping
      componentData={ doors }
      renderComponent={ door => floor.index === door.floor && (
        <DoorListItem { ...door }/>
      ) }
    />
  );
};