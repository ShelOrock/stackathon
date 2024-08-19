import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks';

import { OnClickType } from '../../../types';
import { setToggleElement } from '../../../redux/toggleElements/actions';
import Button from '../../Button';
import { UIData } from '../../../enums';

export default () => {

  const dispatch = useAppDispatch();

  const elementLabelsIsShowing = useAppSelector(state => state.toggleElements.elementLabels.isShowing);

  const handleOnClick: OnClickType = () => {
    dispatch(setToggleElement(UIData.ElementLabels, !elementLabelsIsShowing));
  };

  return <Button onClick={ handleOnClick }>Toggle Labels</Button>
};
