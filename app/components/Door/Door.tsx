import React from "react";
import { useAppDispatch } from "../../hooks";
import { Rnd } from "react-rnd";

import DoorHUD from "./DoorHUD";
import StyledDoor from "./styles";

import { updateDoor } from "../../redux/doors/actions";

import {
  DoorTypes,
  OnDragStopType,
  OnDoubleClickType,
  RndPropTypes
} from "../../types";

import { Directions } from "../../enums";
import { ComponentPropTypes } from "./types";
import DraggableComponent from "../DraggableComponent";

const Door: React.FC<ComponentPropTypes> = ({
  index,
  isDisabled,
  isHidden,
  isHighlighted,
  isLocked,
  tag,
  height,
  width,
  orientation,
  xPosition,
  yPosition,
  xPos,
  yPos
}: DoorTypes) => {
  const GRID_SNAP: number = 25;

  const dispatch = useAppDispatch();

  const snapCoordinateToGrid = (deltaCoordinate, gridSnap) => {
    return Math.round(deltaCoordinate / gridSnap) * gridSnap;
  };

  const onDragStop = (_e, delta) => {
    const xPosition = snapCoordinateToGrid(delta.x, GRID_SNAP);
    const yPosition = snapCoordinateToGrid(delta.y, GRID_SNAP);

    dispatch(updateDoor({
      index,
      xPos: xPosition,
      yPos: yPosition
    }));
  };

  const onDoubleClick: OnDoubleClickType = () => {
    if(orientation === Directions.NORTH_SOUTH) {
      dispatch(updateDoor({
        index,
        width: height,
        height: width,
        orientation: Directions.EAST_WEST
      }));

      return;
    };

    if(orientation === Directions.EAST_WEST) {
      dispatch(updateDoor({
        index,
        width: height,
        height: width,
        orientation: Directions.NORTH_SOUTH
      }));

      return;
    };
  };

  const evaluateDoorColor = (isDisabled, isHighlighted, tag): string => {
    if(isDisabled) {
      return "disabled"

    } else if(isHighlighted) {
      return tag

    } else {
      return "black"
    }
  };

  return (
    !isHidden &&
    <DraggableComponent
      dragGrid={ [ GRID_SNAP, GRID_SNAP ] }
      enableResizing={ false }
      xPosition={ xPos } // TODO: Change to xPosition
      yPosition={ yPos } // TODO: Change to yPosition
      width={ width }
      height={ height }
      onDragStop={ onDragStop }
      onDoubleClick={ onDoubleClick }
      disableDragging={ isLocked || isDisabled }
    >
      { !isDisabled && <DoorHUD
        index={ index }
        isDisabled={ isDisabled }
        isHidden={ isHidden }
        isHighlighted={ isHighlighted }
        isLocked={ isLocked }
        tag={ tag }
        height={ height }
        width={ width }
        orientation={ orientation }
        xPosition={ xPosition }
        yPosition={ yPosition }
        xPos={ xPos }
        yPos={ yPos }
      /> }
      <StyledDoor 
        $width={ width }
        $height={ height }
        $orientation={ orientation }
        $variant={ evaluateDoorColor(isDisabled, isHighlighted, tag) }
      />
    </DraggableComponent>
  )
};

export default Door;
