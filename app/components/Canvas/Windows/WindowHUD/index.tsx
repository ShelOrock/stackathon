import * as React from 'react';
import { useTypedSelector } from '../../../../utils';

import WindowHUD from './WindowHUDElements';
import * as StyledComponents from '../../../StyledComponents';
const { StyledDiv: { ElementHUDContainer } } = StyledComponents;

import { WindowTypes } from '../../../../types';

export default (window: WindowTypes) => {

  const { toggleHUD } = useTypedSelector(state => state);

  return (
    toggleHUD &&
    <ElementHUDContainer>
      <WindowHUD { ...window } />
    </ElementHUDContainer>
  );
};