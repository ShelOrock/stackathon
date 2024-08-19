import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks';

import { OnClickType } from '../../../types';
import { setToggleElement } from '../../../redux/toggleElements/actions';
import { UIData } from '../../../enums';
import Button from '../../Button';

export default () => {

  const dispatch = useAppDispatch();

  const elementActionsIsShowing = useAppSelector(state => state.toggleElements.elementActions.isShowing);

  const handleOnClick: OnClickType = () => dispatch(setToggleElement(UIData.ElementActions, !elementActionsIsShowing));

  return <Button onClick={ handleOnClick }>Toggle HUD</Button>
}