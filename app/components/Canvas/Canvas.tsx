import React from "react";

import StyledStage from "./styles";

import { ComponentPropTypes } from "./types";

const Stage: React.FC<ComponentPropTypes> = ({
  canvasSize,
  innerRef,
  onMouseMove,
  children
}) => (
  <StyledStage
    ref={ innerRef }
    width={ canvasSize }
    height={ canvasSize }
    onMouseMove={ onMouseMove }
  >{ children }</StyledStage>
);

export default Stage;
