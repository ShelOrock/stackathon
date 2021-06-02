import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../utils';

import * as StyledComponents from '../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents

import * as ReduxActions from '../../../redux/actions';
const { toggleLabelInputsActions: { setLabelInputs } } = ReduxActions;

import { OnClickType } from '../../../types';

export default () => {

  const dispatch = useDispatch();

  const { toggleLabelInputs } = useTypedSelector(state => state);

  const handleOnClick: OnClickType = () => dispatch(setLabelInputs(!toggleLabelInputs));

  return <Button onClick={ handleOnClick }>Toggle Labels</Button>
}