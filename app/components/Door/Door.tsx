import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";

import StyledDoor from "./styles";

import DraggableComponent from "../DraggableComponent";

import { AppData, Directions } from "../../enums";
import { ComponentPropTypes } from "./types";
import { entityActions } from "../../redux/actions";
import { ReactTypes } from "../../types";
import FloatingTools from "../FloatingTools";
import { Group, Line, Rect } from "react-konva";

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
}) => {
  const GRID_SNAP: number = 25;
  const CANVAS_MINIMUM_SIZE = 0;

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

  const onDragMove = e => {

    const elementPosition = e.target.absolutePosition();
    const collidingObject = {
      x: elementPosition.x,
      y: elementPosition.y,
      width,
      height
    };

    if(detectCanvasBoundaries(collidingObject)) {
      elementPosition.x = xPosition;
      elementPosition.y = yPosition;
      e.target.absolutePosition(elementPosition);
    };

    elementPosition.x = snapCoordinateToGrid(elementPosition.x, GRID_SNAP);
    elementPosition.y = snapCoordinateToGrid(elementPosition.y, GRID_SNAP);
    e.target.absolutePosition(elementPosition);
    dispatch(entityActions.updateEntity(AppData.Doors, {
      id,
      xPosition: elementPosition.x,
      yPosition: elementPosition.y
    }));
  };

  const onDoubleClick: ReactTypes.HandlerTypes.OnClickType = () => {
    if(orientation === Directions.NORTH_SOUTH) {
      dispatch(entityActions.updateEntity(AppData.Doors, {
        id,
        width: height,
        height: width,
        orientation: Directions.EAST_WEST
      }));

      return;
    };

    if(orientation === Directions.EAST_WEST) {
      dispatch(entityActions.updateEntity(AppData.Doors, {
        id,
        width: height,
        height: width,
        orientation: Directions.NORTH_SOUTH
      }));

      return;
    };
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
          xPosition={ xPosition }
          yPosition={ yPosition }
          width={ width }
          height={ height }
          fill="black"
          stroke="white"
          strokeWidth={ 3 }
          offsetY={ 3 }
          draggable
          onDragMove={ onDragMove }
          onDoubleClick={ onDoubleClick }
          // $orientation={ orientation }
          // $isDisabled={ isDisabled }
          // $isHighlighted={ isHighlighted }
          // $tag={ tag }
        />
        </Group>

    )
};

export default Door;
