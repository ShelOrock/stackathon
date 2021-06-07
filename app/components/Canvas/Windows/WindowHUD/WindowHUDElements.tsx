import * as React from 'react';
import { useTypedSelector } from '../../../../utils';

import WindowHUDButtons from './WindowHUDButtons';
import WindowLabelInput from './WindowLabelInput';

import { WindowTypes } from '../../../../types';

export default (window: WindowTypes) => {
  
  const { toggleLabels } = useTypedSelector(state => state);

  return (
    <>
      <WindowHUDButtons { ...window } />
      { toggleLabels && <WindowLabelInput { ...window } />}
    </>
  )
}