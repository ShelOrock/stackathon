import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks';

import * as StyledComponents from '../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

import { setHUD } from '../../../redux/toggleHUD/actions'

import { OnClickType } from '../../../types';

export default () => {

  const dispatch = useAppDispatch();

  const { toggleHUD } = useAppSelector(state => state);

  const handleOnClick: OnClickType = () => dispatch(setHUD(!toggleHUD));

  return <Button onClick={ handleOnClick }>Toggle HUD</Button>
}