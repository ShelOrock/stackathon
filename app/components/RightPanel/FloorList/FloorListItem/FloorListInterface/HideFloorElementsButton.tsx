import * as React from 'react';
import { useAppDispatch } from '../../../../../hooks';

import * as StyledComponents from '../../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import * as ReduxActions from '../../../../../redux/actions';
const { floorActions: { updateFloor } } = ReduxActions;

import { FloorTypes, OnClickType } from '../../../../../types';

export default (floor: FloorTypes) => {

  const dispatch = useAppDispatch();
  
  const { index, isHidden } = floor;

  const handleOnClick: OnClickType = () => dispatch(updateFloor({ index, isHidden: !isHidden }));

  interface ButtonPropTypes {
    variant: string;
    onClick: OnClickType;
  }

  const buttonProps: ButtonPropTypes = {
    variant: 'primary',
    onClick: handleOnClick,
  };

  return <SmallButton { ...buttonProps }>{ !isHidden ? <>&#9660;</> : <>&#9654;</> }</SmallButton>;
};