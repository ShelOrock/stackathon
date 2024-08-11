import * as React from 'react';
import { useAppSelector, useAppDispatch } from "../../../hooks";

import * as StyledComponents from '../../StyledComponents'
const { StyledButton: { Button } } = StyledComponents;

import * as ReduxActions from '../../../redux/actions';
const { toggleLabelsActions: { setLabels } } = ReduxActions;

import { OnClickType } from '../../../types';

export default () => {

  const dispatch = useAppDispatch();
  
  const { toggleLabels } = useAppSelector(state => state)

  const handleOnClick: OnClickType = () => dispatch(setLabels(!toggleLabels));

  return <Button onClick={ handleOnClick }>Toggle Labels</Button>;
}