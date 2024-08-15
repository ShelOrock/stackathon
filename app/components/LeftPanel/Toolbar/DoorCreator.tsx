import * as React from 'react';
import { useDispatch } from 'react-redux';
import { findMissingIndex } from '../../../utils';

import * as StyledComponents from '../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

import * as ReduxActions from '../../../redux/actions';
import { useAppSelector } from '../../../hooks';
import { Directions } from '../../../enums';
const { doorActions: { createDoor } } = ReduxActions;

export default () => {

  const dispatch = useDispatch();

  const { doors, currentFloor } = useAppSelector(state => state);

  const handleCreateDoor = (): void => {
    dispatch(createDoor({
      index: findMissingIndex(doors),
      width: 25,
      height: 12,
      xPos: 0,
      yPos: 0,
      label: `Door ${ findMissingIndex(doors) + 1 }`,
      orientation: Directions.EAST_WEST,
      isHighlighted: false,
      isLocked: false,
      isHidden: false,
      floor: currentFloor.index,
      tag: 'blue'
    }));
  };

  return <Button onClick={ handleCreateDoor }>+ Create new door</Button>
};
