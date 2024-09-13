import React from "react";
import { Rect } from "react-konva";

import { ComponentPropTypes } from "./types";

import { Directions } from "../../enums";

const DoorPreview: React.FC<ComponentPropTypes> = ({
  xPosition,
  yPosition,
  orientation
}) => {

  const DOOR_PREVIEW_WIDTH = 25;
  const DOOR_PREVIEW_HEIGHT = 6;
  const DOOR_PREVIEW_OFFSET = 3;
  const NO_DOOR_PREVIEW_OFFSET = 0;

  return (
    <Rect
      x={ xPosition - (orientation === Directions.horizontal ? NO_DOOR_PREVIEW_OFFSET : DOOR_PREVIEW_OFFSET) }
      y={ yPosition - (orientation === Directions.horizontal ? DOOR_PREVIEW_OFFSET : NO_DOOR_PREVIEW_OFFSET) }
      width={ orientation === Directions.horizontal ? DOOR_PREVIEW_WIDTH : DOOR_PREVIEW_HEIGHT }
      height={ orientation === Directions.horizontal ? DOOR_PREVIEW_HEIGHT : DOOR_PREVIEW_WIDTH }
      fill={ "#8AC926" }
      stroke={ "#000" }
      strokeWidth={ 3 }
    />
  )
}

export default DoorPreview;
