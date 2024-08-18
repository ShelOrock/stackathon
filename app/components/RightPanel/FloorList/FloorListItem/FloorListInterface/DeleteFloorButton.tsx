import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../../hooks';

import * as StyledComponents from '../../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import * as ReduxActions from '../../../../../redux/actions';
const {
  floorActions: { deleteFloor },
  currentFloorActions: { resetCurrentFloor },
  roomActions: { deleteRoom },
  doorActions: { deleteDoor },
  windowActions: { deleteWindow }
} = ReduxActions;

import { FloorTypes, OnClickType } from '../../../../../types';

export default (floor: FloorTypes) => {

  const dispatch = useAppDispatch();

  const {
    rooms,
    doors,
    windows
  } = useAppSelector(state => state);

  const roomsOnFloor = rooms.filter(room => room.floor == floor.index);
  const doorsOnFloor = doors.filter(door => door.floor == floor.index);
  const windowsOnFloor = windows.filter(window => window.floor == floor.index);

  const handleOnClick = () => {
    dispatch(deleteFloor(floor))
    roomsOnFloor.forEach(room => dispatch(deleteRoom(room)));
    doorsOnFloor.forEach(door => dispatch(deleteDoor(door.id)));
    windowsOnFloor.forEach(window => dispatch(deleteWindow(window.id)));
    dispatch(resetCurrentFloor())
  }

  interface ButtonPropTypes {
    variant: string;
    onClick: OnClickType;
  }

  const buttonProps: ButtonPropTypes = {
    variant: 'tertiary',
    onClick: handleOnClick,
  }
  return <SmallButton { ...buttonProps }>X</SmallButton>
}