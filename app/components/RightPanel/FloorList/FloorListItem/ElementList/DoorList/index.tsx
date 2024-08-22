import React from 'react';
import { useAppSelector } from '../../../../../../hooks';

import DoorListItem from './DoorListItem';

import ComponentMapping from '../../../../../ComponentMapping';
import { AppDataSelectors } from '../../../../../../redux/selectors';
import { AppData } from '../../../../../../enums';

export default ({ floorId }) => {

  const doors = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors));

  return (
    <ComponentMapping
      componentData={ doors }
      renderComponent={ door => floorId === door.floor && (
        <DoorListItem { ...door }/>
      ) }
    />
  );
};