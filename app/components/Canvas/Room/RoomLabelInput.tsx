import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as StyledComponents from '../../StyledComponents';
const { StyledForm: { InputField } } = StyledComponents;

import { updateRoom } from '../../../redux/rooms/actions';

import { RoomTypes, InputOnChangeType } from '../../../types';

export default (room: RoomTypes) => {

  const dispatch = useDispatch();

  const handleOnChange: InputOnChangeType = (e) => dispatch(updateRoom({ index: room.index, label: e.target.value }))

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
    placeholder: `Room ${ room.index + 1 }`,
    value: room.label,
    onChange: handleOnChange,
  }

  return <InputField { ...inputProps }/>
};