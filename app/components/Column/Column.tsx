import React from "react";

import StyledColumn from "./styles";

import { ComponentPropTypes } from "./types";

const Column: React.FC<ComponentPropTypes> = ({
  justifyContent = "flex-start",
  alignItems = "flex-start",
  children
}) => (
  <StyledColumn
    $justifyContent={ justifyContent }
    $alignItems={ alignItems }
  >{ children }</StyledColumn>
);

export default Column;
