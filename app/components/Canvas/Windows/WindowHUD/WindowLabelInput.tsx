import * as React from 'react';
import { useAppDispatch } from "../../../../hooks";

import * as StyledComponents from '../../../StyledComponents';
const { StyledForm: { InputField } } = StyledComponents;

import * as ReduxActions from '../../../../redux/actions';
const { windowActions: { updateWindow } } = ReduxActions;

import { WindowTypes, InputOnChangeType } from '../../../../types';

export default (window: WindowTypes) => {

  const { index, label } = window;
  
  const dispatch = useAppDispatch();

  const handleOnChange: InputOnChangeType = e => { dispatch(updateWindow({ index, label: e.target.value })) };

  interface InputPropTypes {
    type: 'text';
    name: 'label';
    placeholder: string;
    value: string;
    onChange: InputOnChangeType;
  };

  const inputProps: InputPropTypes = {
    type: 'text',
    name: 'label',
    placeholder: `Window ${ index + 1 }`,
    value: label,
    onChange: handleOnChange,
  };

  return <InputField { ...inputProps } />
}