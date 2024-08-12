import * as React from 'react';
import { useAppSelector } from '../../../../hooks';

import WindowHUDButtons from './WindowHUDButtons';
import WindowLabelInput from './WindowLabelInput';

import { WindowTypes } from '../../../../types';

export default (window: WindowTypes) => {
  
  const elementLabelsIsShowing = useAppSelector(state => state.toggleElements.elementLabels.isShowing);

  return (
    <>
      <WindowHUDButtons { ...window } />
      { elementLabelsIsShowing && <WindowLabelInput { ...window } />}
    </>
  )
}