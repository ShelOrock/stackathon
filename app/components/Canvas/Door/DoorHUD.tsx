import * as React from 'react';
import { useTypedSelector } from '../../../utils';

import DeleteElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/DeleteElementButton';
import LockElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/LockElementButton';
import * as StyledComponents from '../../StyledComponents';
const { StyledDiv: { ElementHUDContainer } } = StyledComponents;

import { ElementTypes, DoorTypes } from '../../../types';

export default (door: DoorTypes) => {

  const { toggleHUD } = useTypedSelector(state => state);

  const doorHUDProps: ElementTypes = {
    type: 'door',
    ...door
  }
  return (
    toggleHUD && 
    <ElementHUDContainer>
      <DeleteElementButton { ...doorHUDProps } />
      <LockElementButton { ...doorHUDProps }/>
    </ElementHUDContainer>
  )
}