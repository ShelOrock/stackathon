import React from 'react';
import { useAppDispatch } from '../../../../../hooks';

import * as StyledComponents from '../../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import { OnClickType } from '../../../../../types';
import { updateEntity } from '../../../../../redux/entities/actions';
import { AppData } from '../../../../../enums';

export default (floor) => {

  const dispatch = useAppDispatch();
  
  const { id, isHidden } = floor;

  const handleOnClick: OnClickType = () => dispatch(updateEntity(AppData.Floors, { id, isHidden: !isHidden }));

  return (
    <SmallButton onClick={ handleOnClick }>{ !isHidden ? <>&#9660;</> : <>&#9654;</> }</SmallButton>
  );
};