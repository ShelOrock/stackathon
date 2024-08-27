import React from "react";

import StyledRow from "./styles";

import { ComponentPropTypes } from "./types";

const Row: React.FC<ComponentPropTypes> = ({
  justifyContent = "flex-start",
  alignItems = "flex-start",
  children,
  ...spacingProps
}) => (
  <StyledRow
    $justifyContent={ justifyContent }
    $alignItems={ alignItems }
    { ...spacingProps }
  >{ children }</StyledRow>
);

export default Row;
