import React from 'react';
import { useAppSelector } from '../../../../../../hooks';

import WindowListItem from './WindowListItem';

import { FloorTypes } from '../../../../../../types';
import { AppDataSelectors } from '../../../../../../redux/selectors';
import { AppData } from '../../../../../../enums';
import ComponentMapping from '../../../../../ComponentMapping';

export default (floor: FloorTypes) => {

  const windows = useAppSelector(AppDataSelectors.selectAppData(AppData.Windows));

  return (
    <ComponentMapping
      componentData={ windows }
      renderComponent={ window => floor.index === window.floor && (
        <WindowListItem { ...window } />
      ) }
    />
  );
};
