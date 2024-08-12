import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks';

import * as StyledComponents from '../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

import { OnClickType } from '../../../types';
import { setToggleElement } from '../../../redux/toggleElements/actions';
import UIDataEntities from '../../../types/redux/entities';

export default () => {

  const dispatch = useAppDispatch();

  const elementActionsIsShowing = useAppSelector(state => state.toggleElements.elementActions.isShowing);

  const handleOnClick: OnClickType = () => dispatch(setToggleElement(UIDataEntities.elementActions, !elementActionsIsShowing));

  return <Button onClick={ handleOnClick }>Toggle HUD</Button>
}