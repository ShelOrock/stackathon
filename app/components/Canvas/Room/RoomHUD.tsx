import * as React from 'react';
import { useTypedSelector } from '../../../utils';

import RoomLabelInput from './RoomLabelInput';
import DeleteElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/DeleteElementButton';
import LockElementButton from '../../RightPanel/FloorList/FloorListItem/ElementList/ElementListInterface/LockElementButton';
import * as StyledComponents from '../../StyledComponents';
const { StyledDiv: { ElementHUDContainer, Row, Column } } = StyledComponents;

import { RoomTypes, ElementTypes } from '../../../types';

export default (room: RoomTypes) => {

  const { toggleHUD, toggleLabelInputs } = useTypedSelector(state => state);

  const roomHUDProps: ElementTypes = {
    type: 'room',
    ...room
  }

  return (
    toggleHUD &&
    <ElementHUDContainer>
      <Column>
        <Row>
          <DeleteElementButton { ...roomHUDProps } />
          <LockElementButton { ...roomHUDProps } />
        </Row>
        { toggleLabelInputs && <RoomLabelInput { ...room }/> }
      </Column>
    </ElementHUDContainer>
  )
}