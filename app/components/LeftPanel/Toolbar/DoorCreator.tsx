import React from 'react';

import Button from '../../Button';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { AppData, Directions } from '../../../enums';
import { addEntity } from '../../../redux/entities/actions';

import * as AppDataSelectors from '../../../redux/entities/selectors';

import { findMissingId } from '../../../utils';

export default () => {

  const dispatch = useAppDispatch();

  const doors = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors, {
    attributes: [ "id" ]
  } ));

  const { currentFloor } = useAppSelector(state => state);

  const handleCreateDoor = (): void => {
    const id = findMissingId(doors);

    dispatch(addEntity(AppData.Doors, {
      id,
      width: 25,
      height: 12,
      xPosition: 0,
      yPosition: 0,
      label: `Door ${ id + 1 }`,
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
