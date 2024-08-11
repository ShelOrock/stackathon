import * as React from 'react';
import { useAppSelector } from '../../../../hooks';

import WindowHUDButtons from './WindowHUDButtons';
import WindowLabelInput from './WindowLabelInput';

import { WindowTypes } from '../../../../types';

export default (window: WindowTypes) => {
  
  const { toggleLabels } = useAppSelector(state => state);

  return (
    <>
      <WindowHUDButtons { ...window } />
      { toggleLabels && <WindowLabelInput { ...window } />}
    </>
  )
}