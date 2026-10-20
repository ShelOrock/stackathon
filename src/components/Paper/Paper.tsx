import React from "react";
import { ComponentPropTypes } from "./types";
import StyledPaper from "./styles";

const Paper: React.FC<ComponentPropTypes> = ({
  width = "auto",
  children,
  ...spacingProps
}) => (
  <StyledPaper
    $width={ width }
    { ...spacingProps }
  >{ children }</StyledPaper>
);

export default Paper;
