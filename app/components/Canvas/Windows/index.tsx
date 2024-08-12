import * as React from 'react';
import { useAppSelector } from '../../../hooks';

import WindowComponent from './WindowComponent';

import { WindowTypes } from '../../../types';

export default () => {

  const { windows = [], currentFloor } = useAppSelector(state => state);

  return (
    <>
      {
        windows.map((window: WindowTypes) => (
          <WindowComponent
            key={ window.index }
            isDisabled={ window.floor !== currentFloor.index }
            { ...window }
          />
        ))
      }
    </>
  );
};
