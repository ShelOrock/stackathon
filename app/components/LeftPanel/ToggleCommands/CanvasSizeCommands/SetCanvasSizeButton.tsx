import React from "react";
import { useAppSelector, useAppDispatch } from '../../../../hooks';

import * as StyledComponents from '../../../StyledComponents';
const { StyledButton: { SmallButton } } = StyledComponents;

import * as ReduxActions from '../../../../redux/actions';
const { canvasSizeActions: { setCanvasSize } } = ReduxActions;

import { OnClickType } from '../../../../types';

interface ComponentPropTypes {
  size: number;
  label: string;
}

const SetCanvasSizeButton: React.FC<ComponentPropTypes> = ({ size, label }) => {

  const { canvasSize } = useAppSelector(state => state);

  const dispatch = useAppDispatch();

  const handleOnClick: OnClickType = () => dispatch(setCanvasSize(size));

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

export default SetCanvasSizeButton;
