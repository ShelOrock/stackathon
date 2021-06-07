import * as React from 'react';
import { useTypedSelector } from '../../../../../../utils';

import WindowListItem from './WindowListItem';

import { FloorTypes, WindowTypes } from '../../../../../../types';

export default (floor: FloorTypes) => {

  const { windows } = useTypedSelector(state => state)
  const renderWindows = () => (
    !!windows.length && windows.map((window: WindowTypes) => {
      return floor.index === window.floor && <WindowListItem key={ window.index } { ...window } /> 
    })
  );

  return (
    <>
      { renderWindows() }
    </>
  );
};