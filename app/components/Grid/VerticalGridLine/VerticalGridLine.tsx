import React from "react";

import StyledVerticalGridLine from "./styles";

import { ComponentPropTypes } from "./types";

const VerticalGridLine: React.FC<ComponentPropTypes> = ({ column }) => (
  <StyledVerticalGridLine $column={ column }/>
);

export default VerticalGridLine;
