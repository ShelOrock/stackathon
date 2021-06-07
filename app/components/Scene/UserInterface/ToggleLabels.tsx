import * as React from 'react';
import { useTypedSelector } from '../../../utils';
import { useDispatch } from 'react-redux';

import * as StyledComponents from '../../StyledComponents'
const { StyledButton: { Button } } = StyledComponents;

import * as ReduxActions from '../../../redux/actions';
const { toggleLabelsActions: { setLabels } } = ReduxActions;

import { OnClickType } from '../../../types';

export default () => {

  const dispatch = useDispatch();
  
  const { toggleLabels } = useTypedSelector(state => state)

  const handleOnClick: OnClickType = () => dispatch(setLabels(!toggleLabels));

  return <Button onClick={ handleOnClick }>Toggle Labels</Button>;
}