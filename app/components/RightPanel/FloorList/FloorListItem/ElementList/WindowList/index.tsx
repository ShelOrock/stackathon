import * as React from 'react';
import { useAppSelector } from '../../../../../../hooks';

import WindowListItem from './WindowListItem';

import { FloorTypes, WindowTypes } from '../../../../../../types';

export default (floor: FloorTypes) => {

  const { windows = [] } = useAppSelector(state => state)

  return (
    <>
      { windows.map((window: WindowTypes) => floor.index === window.floor && <WindowListItem key={ window.index } { ...window } />) }
    </>
  );
};