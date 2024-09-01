import React from "react";

import StyledStage from "./styles";

import { ComponentPropTypes } from "./types";

const Stage: React.FC<ComponentPropTypes> = ({ canvasSize, children }) => (
  <StyledStage
    width={ canvasSize }
    height={ canvasSize }
  >{ children }</StyledStage>
);

export default Stage;
