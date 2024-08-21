import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';

import * as StyledComponents from '../../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import { OnClickType } from '../../../../../types';
import { deleteEntity, resetActiveId, resetEntities, setActiveId } from '../../../../../redux/entities/actions';
import { AppData } from '../../../../../enums';
import { AppDataSelectors } from '../../../../../redux/selectors';

export default () => {

  const dispatch = useAppDispatch();

  const activeFloor = useAppSelector(AppDataSelectors.selectActiveAppData(AppData.Floors, {
    attributes: [ "id" ]
  }));

  const roomsToDelete = useAppSelector(AppDataSelectors.selectAppData(AppData.Rooms, {
    attributes: [ "id" ],
    filters: { floor: activeFloor.id }
  }));

  const doorsToDelete = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors, {
    attributes: [ "id" ],
    filters: { floor: activeFloor.id }
  }));

  const windowsToDelete = useAppSelector(AppDataSelectors.selectAppData(AppData.Windows, {
    attributes: [ "id" ],
    filters: { floor: activeFloor.id }
  }));

  const handleOnClick = () => {
    dispatch(deleteEntity(AppData.Floors, activeFloor.id));
    dispatch(setActiveId(AppData.Floors, 1 )); // TODO: Find another solution for this
    roomsToDelete.forEach(room => dispatch(deleteEntity(AppData.Rooms, room.id)));
    doorsToDelete.forEach(door => dispatch(deleteEntity(AppData.Doors, door.id)));
    windowsToDelete.forEach(window => dispatch(deleteEntity(AppData.Windows, window.id)));
  };

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