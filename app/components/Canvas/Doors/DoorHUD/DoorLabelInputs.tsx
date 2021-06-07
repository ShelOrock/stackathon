import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as StyledComponents from '../../../StyledComponents';
const { StyledForm: { InputField } } = StyledComponents;

import * as ReduxActions from '../../../../redux/actions';
const { doorActions: { updateDoor } } = ReduxActions;

import { DoorTypes, InputOnChangeType } from '../../../../types';

export default (door: DoorTypes) => {

  const { index, label } = door;

  const dispatch = useDispatch();

  const handleOnChange: InputOnChangeType = e =>  dispatch(updateDoor({ index, label: e.target.value }));

  interface InputPropTypes {
    type: 'text';
    name: 'label';
    placeholder: string;
    value: string;
    onChange: InputOnChangeType;
  }

  const inputProps: InputPropTypes = {
    type: 'text',
    name: 'label',
    placeholder: `Door ${ index + 1 }`,
    value: label,
    onChange: handleOnChange,
  }

  return <InputField { ...inputProps } />

}