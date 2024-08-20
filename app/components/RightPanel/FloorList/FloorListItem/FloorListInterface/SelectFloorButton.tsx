import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../../hooks';

import * as StyledComponents from '../../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import { OnClickType } from '../../../../../types';
import { AppDataSelectors } from '../../../../../redux/selectors';
import { AppData } from '../../../../../enums';
import { setActiveId } from '../../../../../redux/entities/actions';

export default (floor) => {

  const dispatch = useAppDispatch();

  const activeFloorId = useAppSelector(AppDataSelectors.selectActiveAppData(AppData.Floors, {
    attributes: [ "id" ]
  }));

  const handleOnClick: OnClickType = () => dispatch(setActiveId(AppData.Floors, floor.id));

  interface ButtonPropTypes {
    variant: string;
    onClick: OnClickType;
  };

  const buttonProps: ButtonPropTypes = {
    variant: activeFloorId === floor.id ? 'primary' : 'secondary',
    onClick: handleOnClick
  };

  return <SmallButton { ...buttonProps }>Floor { floor.id + 1 }</SmallButton>
};
