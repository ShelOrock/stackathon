import * as React from 'react';
import { useAppSelector } from "../../../../hooks";

import DoorHUD from './DoorHUDElements';
import { ElementHUDContainer } from '../../../StyledComponents/StyledDiv';

export default (door) => {

  const { toggleHUD } = useAppSelector(state => state);

  return (
    toggleHUD &&
    <ElementHUDContainer>
      <DoorHUD { ...door } />
    </ElementHUDContainer>
  )
}