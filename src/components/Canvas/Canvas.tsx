import React from "react";

import StyledStage from "./styles";

import { ComponentPropTypes } from "./types";

const Stage: React.FC<ComponentPropTypes> = ({
  canvasSize,
  innerRef,
  onMouseMove,
  onClick,
  children
}) => (
  <StyledStage
    ref={ innerRef }
    width={ canvasSize }
    height={ canvasSize }
    onMouseMove={ onMouseMove }
    onClick={ onClick }
  >{ children }</StyledStage>
);

export default Stage;
