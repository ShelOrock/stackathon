import * as React from 'react';
import { useTypedSelector } from '../../../../utils';

import DoorHUD from './DoorHUDElements';
import { ElementHUDContainer } from '../../../StyledComponents/StyledDiv';

export default (door) => {

  const { toggleHUD } = useTypedSelector(state => state);

  return (
    toggleHUD &&
    <ElementHUDContainer>
      <DoorHUD { ...door } />
    </ElementHUDContainer>
  )
}