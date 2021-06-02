import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector, findMissingIndex } from '../../../utils';

import * as StyledComponents from '../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

import * as ReduxActions from '../../../redux/actions';
const { doorActions: { createDoor } } = ReduxActions;

export default () => {

  const dispatch = useDispatch();

  const { doors, currentFloor } = useTypedSelector(state => state);

  const handleCreateDoor = (): void => {
    dispatch(createDoor({
      index: findMissingIndex(doors),
      width: 25,
      height: 12,
      xPos: 0,
      yPos: 0,
      label: `Door ${ findMissingIndex(doors) + 1 }`,
      orientation: 'WE',
      isHighlighted: false,
      isLocked: false,
      isHidden: false,
      floor: currentFloor.index,
      tag: 'blue'
    }));
  };

  return <Button onClick={ handleCreateDoor }>+ Create new door</Button>
};
