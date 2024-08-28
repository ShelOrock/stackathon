import React from "react";

import StyledTag from "./styles";

import { ComponentPropTypes } from "./types";
import { Styles } from "../../enums";

const Tag: React.FC<ComponentPropTypes> = ({
  onClick,
  variant = Styles.ButtonVariants.primary,
  color = Styles.Colors.blue,
  ...spacingProps
}) => (
  <StyledTag
    onClick={ onClick }
    $variant={ variant }
    $color={ color }
    { ...spacingProps }
  />
);

export default Tag;
