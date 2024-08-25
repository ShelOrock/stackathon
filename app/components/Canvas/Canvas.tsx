import React from "react";

import StyledCanvas from "./styles";

import { ComponentPropTypes } from "./types";

const Canvas: React.FC<ComponentPropTypes> = ({ canvasSize, children }) => (
  <StyledCanvas $canvasSize={ canvasSize }>{ children }</StyledCanvas>
);

export default Canvas;
