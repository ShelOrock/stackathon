import * as React from 'react';
import { useAppDispatch } from "../../../hooks";

import * as StyledComponents from '../../StyledComponents';
const { StyledForm: { InputField } } = StyledComponents;

import * as ReduxActions from '../../../redux/actions';
const { doorActions: { updateDoor } } = ReduxActions;

import { DoorTypes, InputOnChangeType } from '../../../types';

export default (door: DoorTypes) => {

  const { index, label } = door;

  const dispatch = useAppDispatch();

  const handleOnChange: InputOnChangeType = e => dispatch(updateDoor({ index, label: e.target.value }));

  return (
    <InputField
      type="text"
      name="label"
      placeholder={ `Door ${ index + 1 }` }
      value={ label }
      onChange={ handleOnChange }
    />
  )

}