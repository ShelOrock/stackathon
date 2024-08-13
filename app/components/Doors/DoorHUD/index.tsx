import * as React from 'react';
import { useAppSelector } from "../../../hooks";

import DoorHUD from './DoorHUDElements';
import { ElementHUDContainer } from '../../StyledComponents/StyledDiv';

export default (door) => {

  const elementActionsIsShowing = useAppSelector(state => state.toggleElements.elementActions.isShowing);

  return (
    elementActionsIsShowing &&
    <ElementHUDContainer>
      <DoorHUD { ...door } />
    </ElementHUDContainer>
  )
}