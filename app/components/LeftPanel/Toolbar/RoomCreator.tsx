import * as React from 'react';
import { useDispatch } from 'react-redux';
import { findMissingIndex } from '../../../utils';
import { useAppSelector } from '../../../hooks';

import * as StyledComponents from '../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

import { createRoom } from '../../../redux/rooms/actions';

export default () => {

  const dispatch = useDispatch();

  const { currentFloor, rooms } = useAppSelector(state => state);

  const handleCreateRoom = () => {
    dispatch(createRoom({
      index: findMissingIndex(rooms),
      width: 100,
      height: 100,
      zAxis: 2,
      xPos: 0,
      yPos: 0,
      label: `Room ${ findMissingIndex(rooms) + 1 }`,
      isHighlighted: false,
      isLocked: false,
      isHidden: false,
      floor: currentFloor.index,
      tag: 'blue',
    }));
  };

  return <Button onClick={ handleCreateRoom }>+ Create a new room</Button>;
};
