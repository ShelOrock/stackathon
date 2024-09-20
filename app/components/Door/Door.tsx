import React, { useState } from "react";
import { useAppDispatch, useAppSelector, useDetectCanvasCollision, useDetectRoomCollision } from "../../hooks";

import { AppData, Directions } from "../../enums";
import { ComponentPropTypes } from "./types";
import { entityActions } from "../../redux/actions";
import { Group, Rect } from "react-konva";

import * as utilities from "../../utilities";

const Door: React.FC<ComponentPropTypes> = ({
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
  tag,
  rooms,
  activeRoom
}) => {

  const GRID_SNAP: number = 25;
  const DOOR_OFFSET = 3;
  const NO_DOOR_OFFSET = 0;
  const DOOR_TOLERANCE = 12;

  const dispatch = useAppDispatch();

  const canvasSize = useAppSelector(state => state.canvasSize);

  const { detectCanvasCollision } = useDetectCanvasCollision();

  const [ doorPositionIsValid, setDoorPositionIsValid ] = useState(false);

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
      xOffset: DOOR_TOLERANCE,
      yOffset: DOOR_TOLERANCE
    })) {
      elementPosition.x = xPosition;
      elementPosition.y = yPosition;
      e.target.absolutePosition(elementPosition);
    };

    setDoorPositionIsValid(false);

    rooms.forEach(room => {
      const stationaryObject = {
        x: room.xPosition,
        y: room.yPosition,
        width: room.width,
        height: room.height
      };

      if(detectLeftBoundary(collidingObject, stationaryObject, DOOR_TOLERANCE) || detectRightBoundary(collidingObject, stationaryObject, DOOR_TOLERANCE)) {
        setDoorPositionIsValid(true);
        elementPosition.x = utilities.functions.snapCoordinateToGrid(elementPosition.x, GRID_SNAP);
        elementPosition.y = utilities.functions.snapCoordinateToGrid(elementPosition.y, GRID_SNAP);
        e.target.absolutePosition(elementPosition);

        dispatch(entityActions.updateEntity(AppData.Doors, {
          id,
          xPosition: elementPosition.x,
          yPosition: elementPosition.y,
          orientation: Directions.vertical,
          room: room.id
        }));
      };

      if(detectTopBoundary(collidingObject, stationaryObject, DOOR_TOLERANCE) || detectBottomBoundary(collidingObject, stationaryObject, DOOR_TOLERANCE)) {
        setDoorPositionIsValid(true);
        elementPosition.x = utilities.functions.snapCoordinateToGrid(elementPosition.x, GRID_SNAP);
        elementPosition.y = utilities.functions.snapCoordinateToGrid(elementPosition.y, GRID_SNAP);
        e.target.absolutePosition(elementPosition);

        dispatch(entityActions.updateEntity(AppData.Doors, {
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
        x={ xPosition }
        y={ yPosition }
        width={ orientation === Directions.horizontal ? width : height }
        height={ orientation === Directions.horizontal ? height : width }
        fill="black"
        stroke="white"
        strokeWidth={ 3 }
        offsetX={ orientation === Directions.horizontal ? NO_DOOR_OFFSET : DOOR_OFFSET }
        offsetY={ orientation === Directions.horizontal ? DOOR_OFFSET : NO_DOOR_OFFSET }
        draggable
        onDragMove={ onDragMove }
      />
    </Group>
  );
};

export default Door;
