import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../utils';

import * as StyledComponents from '../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

import { setHUD } from '../../../redux/toggleHUD/actions'

import { OnClickType } from '../../../types';

export default () => {

  const dispatch = useDispatch();

  const { toggleHUD } = useTypedSelector(state => state);

  const handleOnClick: OnClickType = () => dispatch(setHUD(!toggleHUD));

  return <Button onClick={ handleOnClick }>Toggle HUD</Button>
}