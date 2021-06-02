import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as StyledComponents from '../../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents;

import { resetSunPosition } from '../../../../redux/sunPosition/actions';

import { OnClickType } from '../../../../types';

export default () => {

  const dispatch = useDispatch();
  
  const handleOnClick: OnClickType = () => dispatch(resetSunPosition());

  return <Button onClick={ handleOnClick }>Reset Sun</Button>
}