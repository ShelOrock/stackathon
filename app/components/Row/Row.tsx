import React from "react";

import StyledRow from "./styles";

import { ComponentPropTypes } from "./types";

const Row: React.FC<ComponentPropTypes> = ({
  justifyContent = "flex-start",
  alignItems = "flex-start",
  children
}) => (
  <StyledRow
    $justifyContent={ justifyContent }
    $alignItems={ alignItems }
  >{ children }</StyledRow>
);

export default Row;
