import React from "react";

import StyledButton from "./styles";

import { ComponentPropTypes } from "./types";

const Button: React.FC<ComponentPropTypes> = ({
  onClick,
  variant = "default",
  isDisabled = false,
  children,
  ...spacingProps
}) => (
  <StyledButton
    onClick={ onClick }
    $variant={ variant }
    $isDisabled={ isDisabled }
    { ...spacingProps }
  >{ children }</StyledButton>
);

export default Button;
