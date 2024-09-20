import React, { useRef } from "react";
import { useAppDispatch, useAppSelector, useDetectCanvasCollision, useDetectRoomCollision } from "../../hooks";

import { entityActions } from "../../redux/actions";

import { AppData, Directions, Styles } from "../../enums";
import { ComponentPropTypes } from "./types";
import { Group, Rect } from "react-konva";
import * as utilities from "../../utilities";

const Window: React.FC<ComponentPropTypes> = ({
  id,
  label,
  isDisabled,
  isHidden,
  isHighlighted,
  isLocked,
  height,
  width,
  orientation,
  xPosition,
  yPosition,
  tag = Styles.Colors.blue,
  rooms,
  activeRoom
}) => {

  const GRID_SNAP: number = 25;
  const WINDOW_OFFSET = 2;
  const NO_WINDOW_OFFSET = 0;
  const WINDOW_TOLERANCE = 12;

  const windowRef = useRef(null);

  const dispatch = useAppDispatch();

  const canvasSize = useAppSelector(state => state.canvasSize);

  const { detectCanvasCollision } = useDetectCanvasCollision();

  const {
    detectLeftBoundary,
    detectRightBoundary,
    detectTopBoundary,
    detectBottomBoundary
  } = useDetectRoomCollision();

  const onDragMove = e => {

    const elementPosition = e.target.absolutePosition();
    const collidingObject = {
      x: elementPosition.x,
      y: elementPosition.y,
      width: orientation === Directions.horizontal ? width : height,
      height: orientation === Directions.horizontal ? height : width
    };

    if(detectCanvasCollision(canvasSize, {
      xPosition: collidingObject.x,
      yPosition: collidingObject.y,
      xOffset: WINDOW_TOLERANCE,
      yOffset: WINDOW_TOLERANCE
    })) {
      elementPosition.x = xPosition;
      elementPosition.y = yPosition;
      e.target.absolutePosition(elementPosition);
    };

    rooms.forEach(room => {
      const stationaryObject = {
        x: room.xPosition,
        y: room.yPosition,
        width: room.width,
        height: room.height
      };

      if(detectLeftBoundary(collidingObject, stationaryObject, WINDOW_TOLERANCE) || detectRightBoundary(collidingObject, stationaryObject, WINDOW_TOLERANCE)) {
        elementPosition.x = utilities.functions.snapCoordinateToGrid(elementPosition.x, GRID_SNAP);
        elementPosition.y = utilities.functions.snapCoordinateToGrid(elementPosition.y, GRID_SNAP);
        e.target.absolutePosition(elementPosition);

        dispatch(entityActions.updateEntity(AppData.Windows, {
          id,
          xPosition: elementPosition.x,
          yPosition: elementPosition.y,
          orientation: Directions.vertical,
          room: room.id
        }));
      };

      if(detectTopBoundary(collidingObject, stationaryObject, WINDOW_TOLERANCE) || detectBottomBoundary(collidingObject, stationaryObject, WINDOW_TOLERANCE)) {
        elementPosition.x = utilities.functions.snapCoordinateToGrid(elementPosition.x, GRID_SNAP);
        elementPosition.y = utilities.functions.snapCoordinateToGrid(elementPosition.y, GRID_SNAP);
        e.target.absolutePosition(elementPosition);

        dispatch(entityActions.updateEntity(AppData.Windows, {
          id,
          xPosition: elementPosition.x,
          yPosition: elementPosition.y,
          orientation: Directions.horizontal,
          room: room.id
        }));
      };
    });

    elementPosition.x = xPosition;
    elementPosition.y = yPosition;
    e.target.absolutePosition(elementPosition);
  };

  return (
    <Group>
      <Rect
        ref={ windowRef }
        x={ xPosition }
        y={ yPosition }
        width={ orientation === Directions.horizontal ? width : height }
        height={ orientation === Directions.horizontal ? height : width }
        fill="white"
        stroke="black"
        strokeWidth={ 2 }
        offsetX={ orientation === Directions.horizontal ? NO_WINDOW_OFFSET : WINDOW_OFFSET }
        offsetY={ orientation === Directions.horizontal ? WINDOW_OFFSET : NO_WINDOW_OFFSET }
        draggable
        onDragMove={ onDragMove }
      />
    </Group>
  );
};

export default Window;
