import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";

import { AppData, Directions } from "../../enums";
import { ComponentPropTypes } from "./types";
import { entityActions } from "../../redux/actions";
import { ReactTypes } from "../../types";
import { Group, Rect } from "react-konva";

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
  const CANVAS_MINIMUM_SIZE = 0;
  const DOOR_OFFSET = 3;
  const NO_DOOR_OFFSET = 0;
  const DOOR_TOLERANCE = 12;

  const dispatch = useAppDispatch();

  const canvasSize = useAppSelector(state => state.canvasSize);

  const snapCoordinateToGrid = (deltaCoordinate, gridSnap) => {
    return Math.round(deltaCoordinate / gridSnap) * gridSnap;
  };

  const detectCanvasBoundaries = (collidingObject) => (
    collidingObject.x < CANVAS_MINIMUM_SIZE ||
    collidingObject.x > canvasSize - width ||
    collidingObject.y < CANVAS_MINIMUM_SIZE ||
    collidingObject.y > canvasSize - height
  );

  const detectLeftRoomBoundary = (collidingObject, stationaryObject) => (
    collidingObject.x + DOOR_TOLERANCE > stationaryObject.x &&
    collidingObject.x - DOOR_TOLERANCE < stationaryObject.x &&
    collidingObject.y > stationaryObject.y &&
    collidingObject.y < stationaryObject.y + stationaryObject.height
  );

  const detectRightRoomBoundary = (collidingObject, stationaryObject) => (
    collidingObject.x + DOOR_TOLERANCE > stationaryObject.x + stationaryObject.width &&
    collidingObject.x - DOOR_TOLERANCE < stationaryObject.x + stationaryObject.width &&
    collidingObject.y > stationaryObject.y &&
    collidingObject.y < stationaryObject.y + stationaryObject.height
  );

  const detectTopRoomBoundary = (collidingObject, stationaryObject) => (
    collidingObject.y + DOOR_TOLERANCE > stationaryObject.y &&
    collidingObject.y - DOOR_TOLERANCE < stationaryObject.y &&
    collidingObject.x > stationaryObject.x &&
    collidingObject.x < stationaryObject.x + stationaryObject.width
  );

  const detectBottomRoomBoundary = (collidingObject, stationaryObject) => (
    collidingObject.y + DOOR_TOLERANCE > stationaryObject.y + stationaryObject.height &&
    collidingObject.y - DOOR_TOLERANCE < stationaryObject.y + stationaryObject.height &&
    collidingObject.x > stationaryObject.x &&
    collidingObject.x < stationaryObject.x + stationaryObject.width
  );

  const onDragMove = e => {

    const elementPosition = e.target.absolutePosition();
    const collidingObject = {
      x: elementPosition.x,
      y: elementPosition.y,
      width: orientation === Directions.horizontal ? width : height,
      height: orientation === Directions.horizontal ? height : width
    };

    if(detectCanvasBoundaries(collidingObject)) {
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

      if(detectLeftRoomBoundary(collidingObject, stationaryObject) || detectRightRoomBoundary(collidingObject, stationaryObject)) {
        elementPosition.x = snapCoordinateToGrid(elementPosition.x, GRID_SNAP);
        elementPosition.y = snapCoordinateToGrid(elementPosition.y, GRID_SNAP);
        e.target.absolutePosition(elementPosition);
        console.log(collidingObject, stationaryObject)

        dispatch(entityActions.updateEntity(AppData.Doors, {
          id,
          xPosition: elementPosition.x,
          yPosition: elementPosition.y,
          orientation: Directions.vertical,
          room: room.id
        }));
      };

      if(detectTopRoomBoundary(collidingObject, stationaryObject) || detectBottomRoomBoundary(collidingObject, stationaryObject)) {
        elementPosition.x = snapCoordinateToGrid(elementPosition.x, GRID_SNAP);
        elementPosition.y = snapCoordinateToGrid(elementPosition.y, GRID_SNAP);
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
        {/* { !isDisabled && (
          <FloatingTools
            appDataType={ AppData.Doors }
            id={ id }
            label={ label }
            isHidden={ isHidden }
            isLocked={ isLocked }
            tag={ tag }
            xPosition={ 0 }
            yPosition={ 0 }
          /> 
        ) } */}
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
          // $isDisabled={ isDisabled }
          // $isHighlighted={ isHighlighted }
          // $tag={ tag }
        />
        </Group>

    )
};

export default Door;
