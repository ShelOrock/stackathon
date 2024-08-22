import React from 'react';
import { useAppSelector } from '../../../hooks';

import FloorListItem from './FloorListItem';
import ComponentMapping from "../../ComponentMapping";
import { AppDataSelectors } from '../../../redux/selectors';
import { AppData } from '../../../enums';

export default () => {

  const floors = useAppSelector(AppDataSelectors.selectAppData(AppData.Floors));
  const activeFloor = useAppSelector(AppDataSelectors.selectActiveAppData(AppData.Floors, {
    attributes: [ "id" ]
  }));

  return (
    <ComponentMapping
      componentData={ floors }
      renderComponent={ floor => <FloorListItem { ...floor } activeFloorId={ activeFloor.id }/> }
    />
  );
};
