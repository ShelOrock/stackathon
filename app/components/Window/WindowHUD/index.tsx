import * as React from 'react';
import { useAppSelector } from "../../../hooks";

import WindowHUD from './WindowHUDElements';
import * as StyledComponents from '../../StyledComponents';
const { StyledDiv: { ElementHUDContainer } } = StyledComponents;


export default (window) => {

  const elementActionsIsShowing = useAppSelector(state => state.toggleElements.elementActions.isShowing);

  return (
    elementActionsIsShowing &&
    <ElementHUDContainer>
      <WindowHUD { ...window } />
    </ElementHUDContainer>
  );
};