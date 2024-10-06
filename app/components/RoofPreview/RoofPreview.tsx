import React from "react";
import { ComponentPropTypes } from "./types";
import { Group, Line, Rect } from "react-konva";
import { Directions } from "../../enums";

const RoofPreview: React.FC<ComponentPropTypes> = ({
  xPosition,
  yPosition,
  orientation,
  isValid
}) => {

  const ROOF_PREVIEW_WIDTH = 100;
  const ROOF_PREVIEW_HEIGHT = 100;

  const evaluateLineOrientation = () => {
    if(orientation === Directions.horizontal) {
      return [
        xPosition,
        yPosition + 50,
        xPosition + ROOF_PREVIEW_WIDTH,
        yPosition + 50
      ];
    };

    return [
      xPosition + 50,
      yPosition,
      xPosition + 50,
      yPosition + ROOF_PREVIEW_HEIGHT
    ];
  }

  return (
    <Group>
      <Rect
        x={ xPosition }
        y={ yPosition }
        width={orientation === Directions.horizontal ? ROOF_PREVIEW_WIDTH : ROOF_PREVIEW_HEIGHT }
        height={ orientation === Directions.horizontal ? ROOF_PREVIEW_HEIGHT : ROOF_PREVIEW_WIDTH }
        stroke={ "#000" }
        strokeWidth={ 5 }
        dash={ [ 10, 5 ] }
      />
      <Line
        points={ evaluateLineOrientation() }
        stroke={ "#000" }
        strokeWidth={ 2 }
      />
    </Group>
  );
};

export default RoofPreview;
