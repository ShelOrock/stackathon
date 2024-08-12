import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks';

import * as StyledComponents from '../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

import { OnClickType } from '../../../types';
import { toggleElementsActions } from '../../../redux/actions';
import { Entities } from '../../../types/redux';

export default () => {

  const dispatch = useAppDispatch();

  const gridIsShowing = useAppSelector(state => state.toggleElements.grid.isShowing);

  const handleOnClick: OnClickType = () => dispatch(toggleElementsActions.setToggleElement(Entities.grid, !gridIsShowing))

  interface ButtonPropTypes {
    variant: string;
    onClick: OnClickType
  }

  const buttonProps: ButtonPropTypes = {
    variant: 'primary',
    onClick: handleOnClick
  }
  return <Button { ...buttonProps }>Toggle Grid</Button>
}