import React from 'react';
import { useAppSelector } from '../../../../../../hooks';

import RoomListItem from './RoomListItem';

import { AppDataSelectors } from '../../../../../../redux/selectors';
import { AppData } from '../../../../../../enums';
import ComponentMapping from '../../../../../ComponentMapping';

export default ({ floorId }) => {

  const rooms = useAppSelector(AppDataSelectors.selectAppData(AppData.Rooms));

  return (
    <ComponentMapping
      componentData={ rooms }
      renderComponent={ room => floorId === room.floor && (
        <RoomListItem { ...room } />
      ) }
    />
  );
};