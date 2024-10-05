import React from "react";
import { ComponentPropTypes } from "./types";
import { Group, Line, Rect } from "react-konva";

const RoofPreview: React.FC<ComponentPropTypes> = ({
  xPosition,
  yPosition,
  orientation,
  isValid
}) => {

  const ROOF_PREVIEW_WIDTH = 100;
  const ROOF_PREVIEW_HEIGHT = 100;

  return (
    <Group>
      <Rect
        x={ xPosition }
        y={ yPosition }
        width={ ROOF_PREVIEW_WIDTH }
        height={ ROOF_PREVIEW_HEIGHT }
        stroke={ "#000" }
        strokeWidth={ 5 }
        dash={ [ 10, 5 ] }
      />
      <Line
        points={ [
          xPosition,
          yPosition + 50,
          xPosition + ROOF_PREVIEW_WIDTH,
          yPosition + 50,
        ] }
        stroke={ "#000" }
        strokeWidth={ 2 }
      />
    </Group>
  );
};

export default RoofPreview;
