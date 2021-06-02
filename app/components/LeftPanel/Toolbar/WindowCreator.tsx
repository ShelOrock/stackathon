import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector, findMissingIndex } from '../../../utils';

import * as StyledComponents from '../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

import { createWindow } from '../../../redux/windows/actions';

export default () => {

  const dispatch = useDispatch();

  const { windows, currentFloor } = useTypedSelector(state => state);

  const handleCreateWindow = () => {
    dispatch(createWindow({
      index: findMissingIndex(windows),
      width: 25,
      height: 2,
      xPos: 0,
      yPos: 0,
      label: `Window ${ findMissingIndex(windows) + 1 }`,
      orientation: 'WE',
      isHighlighted: false,
      isLocked: false,
      isHidden: false,
      floor: currentFloor.index,
      tag: 'blue',
    }));
  };

  return <Button onClick={ handleCreateWindow }>+ Create new Window</Button>;
};