import React from 'react';
import { useAppSelector } from '../../../../../../hooks';

import WindowListItem from './WindowListItem';

import { AppDataSelectors } from '../../../../../../redux/selectors';
import { AppData } from '../../../../../../enums';
import ComponentMapping from '../../../../../ComponentMapping';

export default ({ floorId }) => {

  const windows = useAppSelector(AppDataSelectors.selectAppData(AppData.Windows));

  return (
    <ComponentMapping
      componentData={ windows }
      renderComponent={ window => floorId === window.floor && (
        <WindowListItem { ...window } />
      ) }
    />
  );
};
