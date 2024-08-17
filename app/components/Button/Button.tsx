import React from "react";

import StyledButton from "./styles";

import { ComponentPropTypes } from "./types";

const Button: React.FC<ComponentPropTypes> = ({
  onClick,
  variant = "default",
  isDisabled = false,
  children
}) => (
  <StyledButton
    onClick={ onClick }
    $variant={ variant }
    $isDisabled={ isDisabled }
  >{ children }</StyledButton>
);

export default Button;
