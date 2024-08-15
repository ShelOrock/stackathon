import React from 'react';
import { useDispatch } from 'react-redux';
import { findMissingIndex } from '../../../utils';

import * as StyledComponents from '../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

import * as ReduxActions from '../../../redux/actions';
import { useAppSelector } from '../../../hooks';
import { Directions } from '../../../enums';
const { windowActions: { createWindow } } = ReduxActions;

export default () => {

  const dispatch = useDispatch();

  const { windows, currentFloor } = useAppSelector(state => state);

  const handleCreateWindow = (): void => {
    dispatch(createWindow({
      index: findMissingIndex(windows),
      width: 25,
      height: 2,
      xPos: 0,
      yPos: 0,
      label: `Window ${ findMissingIndex(windows) + 1 }`,
      orientation: Directions.EAST_WEST,
      isHighlighted: false,
      isLocked: false,
      isHidden: false,
      floor: currentFloor.index,
      tag: 'blue',
    }));
  };

  return <Button onClick={ handleCreateWindow }>+ Create new Window</Button>;
};