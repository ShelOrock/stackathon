import React from 'react';
import { useAppSelector } from '../../../../../../hooks';

import RoomListItem from './RoomListItem';

import { FloorTypes } from '../../../../../../types';
import { AppDataSelectors } from '../../../../../../redux/selectors';
import { AppData } from '../../../../../../enums';
import ComponentMapping from '../../../../../ComponentMapping';

export default (floor: FloorTypes) => {

  const rooms = useAppSelector(AppDataSelectors.selectAppData(AppData.Rooms));

  return (
    <ComponentMapping
      componentData={ rooms }
      renderComponent={ room => floor.index === room.floor && (
        <RoomListItem { ...room } />
      ) }
    />
  );
};