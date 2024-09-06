import React from "react";
import { Rect } from "react-konva";
import { Styles } from "../../enums";

const RoomPreview = ({
  xPosition,
  yPosition
}) => {

  const ROOM_PREVIEW_WIDTH = 100;
  const ROOM_PREVIEW_HEIGHT = 100;
  const MOUSE_OFFSET = 50;

  return (
    <Rect
      x={ xPosition - MOUSE_OFFSET }
      y={ yPosition - MOUSE_OFFSET }
      width={ ROOM_PREVIEW_WIDTH }
      height={ ROOM_PREVIEW_HEIGHT }
      fill={ Styles.Colors.green }
    />
  );
};

export default RoomPreview;
