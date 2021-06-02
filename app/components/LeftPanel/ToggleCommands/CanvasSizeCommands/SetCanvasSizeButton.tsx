import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../utils';

import * as StyledComponents from '../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import * as ReduxActions from '../../../../redux/actions';
const { canvasSizeActions: { setCanvasSize } } = ReduxActions;

import { OnClickType } from '../../../../types';

export default ({ size, label }) => {

  const { canvasSize } = useTypedSelector(state => state);

  const dispatch = useDispatch();

  const handleOnClick: OnClickType = () => { dispatch(setCanvasSize(size)) };

  interface ButtonPropTypes {
    variant: string;
    onClick: OnClickType;
  }

  const buttonProps: ButtonPropTypes = {
    variant: size == canvasSize ? 'primary' : 'secondary',
    onClick: handleOnClick,
  }

  return <SmallButton { ...buttonProps }>{ label }</SmallButton>
};