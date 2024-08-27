import React from "react";

import StyledButton from "./styles";

import { ComponentPropTypes } from "./types";

const Button: React.FC<ComponentPropTypes> = ({
  onClick,
  color = "blue",
  variant = "primary",
  isDisabled = false,
  children,
  ...spacingProps
}) => (
  <StyledButton
    onClick={ onClick }
    $isDisabled={ isDisabled }
    $color={ color }
    $variant={ variant }
    { ...spacingProps }
  >{ children }</StyledButton>
);

export default Button;
