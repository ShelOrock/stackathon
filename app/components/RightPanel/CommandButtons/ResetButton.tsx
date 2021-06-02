import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as StyledComponents from '../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

import * as ReduxActions from '../../../redux/actions';
const {
  floorActions: { resetFloors },
  currentFloorActions: { resetCurrentFloor },
  roomActions: { resetRooms },
  doorActions: { resetDoors },
  windowActions: { resetWindows }
  } = ReduxActions;

import { OnClickType } from '../../../types';

export default () => {

  const dispatch = useDispatch();

  const handleOnClick: OnClickType = () => {
    dispatch(resetFloors());
    dispatch(resetCurrentFloor());
    dispatch(resetRooms());
    dispatch(resetDoors());
    dispatch(resetWindows());
  };

  const buttonProps = {
    onClick: handleOnClick,
    variant: 'tertiary'
  }

  return <Button { ...buttonProps }>Reset</Button>
}