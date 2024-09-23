import React from "react";
import { Rect } from "react-konva";

import { ComponentPropTypes } from "./types";

import { Directions } from "../../enums";

const WindowPreview: React.FC<ComponentPropTypes> = ({
  xPosition,
  yPosition,
  orientation,
  isValid = false
}) => {

  const WINDOW_PREVIEW_WIDTH = 25;
  const WINDOW_PREVIEW_HEIGHT = 6;
  const WINDOW_PREVIEW_OFFSET = 3;
  const NO_WINDOW_PREVIEW_OFFSET = 0;

  return (
    <Rect
      x={ xPosition - (orientation === Directions.horizontal ? NO_WINDOW_PREVIEW_OFFSET : WINDOW_PREVIEW_OFFSET) }
      y={ yPosition - (orientation === Directions.horizontal ? WINDOW_PREVIEW_OFFSET : NO_WINDOW_PREVIEW_OFFSET) }
      width={ orientation === Directions.horizontal ? WINDOW_PREVIEW_WIDTH : WINDOW_PREVIEW_HEIGHT }
      height={ orientation === Directions.horizontal ? WINDOW_PREVIEW_HEIGHT : WINDOW_PREVIEW_WIDTH }
      fill={ isValid ? "#8AC926" : "red" }
      stroke={ "#000" }
      strokeWidth={ 1 }
    />
  )
};

export default WindowPreview;
