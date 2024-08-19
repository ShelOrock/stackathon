import React from 'react';
import { useAppDispatch } from '../../../../../hooks';

import * as StyledComponents from '../../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import * as ReduxActions from '../../../../../redux/actions';
const {
  floorActions: { deleteFloor },
  currentFloorActions: { resetCurrentFloor },
} = ReduxActions;

import { FloorTypes, OnClickType } from '../../../../../types';
import { resetEntities } from '../../../../../redux/entities/actions';
import { AppData } from '../../../../../enums';

export default (floor: FloorTypes) => {

  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(deleteFloor(floor))
    dispatch(resetEntities(AppData.Rooms));
    dispatch(resetEntities(AppData.Doors));
    dispatch(resetEntities(AppData.Windows));
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