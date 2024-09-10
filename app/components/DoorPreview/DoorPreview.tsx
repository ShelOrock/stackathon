import React from "react";
import { ComponentPropTypes } from "./types";
import { Rect } from "react-konva";

const DoorPreview: React.FC<ComponentPropTypes> = ({
  xPosition,
  yPosition,
  orientation
}) => {

  const DOOR_PREVIEW_WIDTH = 25;
  const DOOR_PREVIEW_HEIGHT = 6;

  return (
    <Rect
      x={ xPosition }
      y={ yPosition }
      width={ orientation === "horizontal" ? DOOR_PREVIEW_WIDTH : DOOR_PREVIEW_HEIGHT }
      height={ orientation === "horizontal" ? DOOR_PREVIEW_HEIGHT : DOOR_PREVIEW_WIDTH }
      fill={ "#8AC926" }
      stroke={ "#000" }
      strokeWidth={ 3 }
    />
  )
}

export default DoorPreview;
