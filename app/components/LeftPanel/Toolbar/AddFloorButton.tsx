import * as React from 'react';
import { useDispatch } from 'react-redux';
import { findMissingId } from '../../../utils';

import * as StyledComponents from '../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

import * as ReduxActions from '../../../redux/actions';
const {
  floorActions: { createFloor },
  currentFloorActions: { setCurrentFloor }
} = ReduxActions;

import { OnClickType } from '../../../types';
import { useAppSelector } from '../../../hooks';

export default () => {

  const dispatch = useDispatch();

  const { floors } = useAppSelector(state => state);

  const handleOnClick: OnClickType = () => {
    const floorId = findMissingId(floors);

    const createdFloor = {
      index: floorId,
      label: `Floor ${ floorId + 1 }`,
      isHighlighted: false,
      isHidden: false
    };
    dispatch(createFloor(createdFloor));
    dispatch(setCurrentFloor(createdFloor));
  };

  interface ButtonPropTypes {
    variant: string;
    onClick: OnClickType;
  }

  const buttonProps: ButtonPropTypes = {
    variant: 'primary',
    onClick: handleOnClick,
  };

  return <Button { ...buttonProps }>+ Add Floor</Button>
};