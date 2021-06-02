import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../utils';

import * as StyledComponents from '../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

import * as ReduxActions from '../../../redux/actions';
const { toggleGridActions: { setGrid } } = ReduxActions;

import { OnClickType } from '../../../types';

export default () => {

  const dispatch = useDispatch();

  const { toggleGrid } = useTypedSelector(state => state);

  const handleOnClick: OnClickType = () => { dispatch(setGrid(!toggleGrid)) }

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