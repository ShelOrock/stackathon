import * as React from 'react';
import { useAppDispatch } from "../../../hooks";

import * as StyledComponents from '../../StyledComponents';
const { StyledForm: { InputField } } = StyledComponents;

import * as ReduxActions from '../../../redux/actions';
const { roomActions: { updateRoom } } = ReduxActions;

import { InputOnChangeType } from '../../../types';

export default (room) => {

  const { index, label } = room;

  const dispatch = useAppDispatch();

  const handleOnChange: InputOnChangeType = e => dispatch(updateRoom({ index, label: e.target.value }))

  return (
    <InputField
      type="text"
      name="label"
      placeholder={ `Room ${ index + 1 }`}
      value={ label }
      onChange={ handleOnChange }
    />
  )
};