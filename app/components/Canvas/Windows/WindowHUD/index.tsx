import * as React from 'react';
import { useAppSelector } from "../../../../hooks";

import WindowHUD from './WindowHUDElements';
import * as StyledComponents from '../../../StyledComponents';
const { StyledDiv: { ElementHUDContainer } } = StyledComponents;

import { WindowTypes } from '../../../../types';

export default (window: WindowTypes) => {

  const { toggleHUD } = useAppSelector(state => state);

  return (
    toggleHUD &&
    <ElementHUDContainer>
      <WindowHUD { ...window } />
    </ElementHUDContainer>
  );
};