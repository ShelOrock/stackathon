import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../../utils';

import * as StyledComponents from '../../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import * as ReduxActions from '../../../../../redux/actions';
const { currentFloorActions: { setCurrentFloor } } = ReduxActions;

import { FloorTypes, OnClickType } from '../../../../../types';

export default (floor: FloorTypes) => {

  const dispatch = useDispatch();

  const { currentFloor } = useTypedSelector(state => state);

  const handleOnClick: OnClickType = () => { dispatch(setCurrentFloor(floor)) }

  interface ButtonPropTypes {
    variant: string;
    onClick: OnClickType;
  }

  const buttonProps: ButtonPropTypes = {
    variant: currentFloor.index === floor.index ? 'primary' : 'secondary',
    onClick: handleOnClick
  }
  return <SmallButton { ...buttonProps }>Floor { floor.index + 1 }</SmallButton>
}