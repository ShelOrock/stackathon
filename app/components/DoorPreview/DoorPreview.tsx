import React from "react";
import { ComponentPropTypes } from "./types";
import { Rect } from "react-konva";
import { Styles } from "../../enums";

const DoorPreview: React.FC<ComponentPropTypes> = ({
  xPosition,
  yPosition
}) => {

  const DOOR_PREVIEW_WIDTH = 25;
  const DOOR_PREVIEW_HEIGHT = 6;

  return (
    <Rect
      x={ xPosition }
      y={ yPosition }
      width={ DOOR_PREVIEW_WIDTH }
      height={ DOOR_PREVIEW_HEIGHT }
      fill={ "#8AC926" }
      stroke={ "#000" }
      strokeWidth={ 3 }
    />
  )
}

export default DoorPreview;
