import React from 'react';
import { useAppDispatch } from '../../../../../hooks';

import * as StyledComponents from '../../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import { OnClickType } from '../../../../../types';
import { deleteEntity, resetActiveId, resetEntities } from '../../../../../redux/entities/actions';
import { AppData } from '../../../../../enums';

export default () => {

  const dispatch = useAppDispatch();

  const roomsToDelete = "" // TODO: create parameter to select by foreign key

  const handleOnClick = () => {
    dispatch(deleteEntity(AppData.Floors));
    dispatch(resetActiveId(AppData.Floors));
    dispatch(resetEntities(AppData.Rooms));
    dispatch(resetEntities(AppData.Doors));
    dispatch(resetEntities(AppData.Windows));
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