import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks';

import * as StyledComponents from '../../StyledComponents';
const { StyledButton: { Button } } = StyledComponents

import * as ReduxActions from '../../../redux/actions';
const { toggleLabelInputsActions: { setLabelInputs } } = ReduxActions;

import { OnClickType } from '../../../types';

export default () => {

  const dispatch = useAppDispatch();

  const { toggleLabelInputs } = useAppSelector(state => state);

  const handleOnClick: OnClickType = () => dispatch(setLabelInputs(!toggleLabelInputs));

  return <Button onClick={ handleOnClick }>Toggle Labels</Button>
}