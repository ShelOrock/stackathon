import * as React from 'react';
import { useAppSelector, useAppDispatch } from "../../../hooks";

import * as StyledComponents from '../../StyledComponents'
const { StyledButton: { Button } } = StyledComponents;

import { toggleElementsActions } from '../../../redux/actions';

import { OnClickType } from '../../../types';
import UIDataEntities from '../../../types/redux/entities';

export default () => {

  const dispatch = useAppDispatch();
  
  const elementLabelsIsShowing = useAppSelector(state => state.toggleElements.elementLabels.isShowing);

  const handleOnClick: OnClickType = () => dispatch(toggleElementsActions.setToggleElement(UIDataEntities.elementLabels, !elementLabelsIsShowing));

  return <Button onClick={ handleOnClick }>Toggle Labels</Button>;
}