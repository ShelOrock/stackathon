import * as React from 'react';
import { useTypedSelector } from '../../../utils';

import WindowComponent from './WindowComponent';

import { WindowTypes } from '../../../types';

export default () => {

  const { windows, currentFloor } = useTypedSelector(state => state);

  const renderWindows = () => (
    !!windows.length && windows.map((window: WindowTypes) => {
      return (
        <WindowComponent
          key={ window.index }
          isDisabled={ window.floor !== currentFloor.index }
          { ...window }
        />
      )
    })
  )

  return (
    <>
      { renderWindows() }
    </>
  )
}