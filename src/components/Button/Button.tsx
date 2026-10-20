import React from "react";

import StyledButton from "./styles";

import { ComponentPropTypes } from "./types";
import { Styles } from "../../enums";

const Button: React.FC<ComponentPropTypes> = ({
  onClick,
  color = Styles.Colors.blue,
  variant = Styles.ButtonVariants.primary,
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
