import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../utils';

import { setSunPosition } from '../../../../redux/sunPosition/actions';

import { InputOnChangeType } from '../../../../types';

export default () => {

  const dispatch = useDispatch();

  const { sunPosition } = useTypedSelector(state => state);

  const handleOnChange: InputOnChangeType = (e) => dispatch(setSunPosition(e.target.value))

  interface InputSliderPropTypes {
    type: 'range';
    min: string;
    max: string;
    value: string;
    onChange: InputOnChangeType;
  };

  const inputSliderProps: InputSliderPropTypes = {
    type: 'range',
    min: '-50',
    max: '50',
    value: sunPosition,
    onChange: handleOnChange,
  };

  return <input { ...inputSliderProps } />;
};