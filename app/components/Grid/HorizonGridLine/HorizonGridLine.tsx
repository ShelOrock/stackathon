import React from "react";

import StyledVerticalGridLine from "./styles";

import { ComponentPropTypes } from "./types";

const VerticalGridLine: React.FC<ComponentPropTypes> = ({ row }) => (
  <StyledVerticalGridLine $row={ row }/>
);

export default VerticalGridLine;
