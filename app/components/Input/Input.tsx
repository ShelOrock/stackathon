import React from "react";

import StyledInput from "./styles";

import { ComponentPropTypes } from "./types";

const Input: React.FC<ComponentPropTypes> = ({
  name,
  value,
  placeholder,
  onChange,
  color = "primary",
  ...spacingProps
}) => (
  <StyledInput
    type="text"
    name={ name }
    value={ value }
    placeholder={ placeholder }
    onChange={ onChange }
    $color={ color }
    { ...spacingProps }
  />
);

export default Input;
