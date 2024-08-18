import React from "react";
import { useAppDispatch } from "../../hooks";

import StyledDoor from "./styles";

import DoorHUD from "./DoorHUD";
import DraggableComponent from "../DraggableComponent";

import { Directions } from "../../enums";
import { OnDoubleClickType } from "../../types";
import { ComponentPropTypes } from "./types";
import { updateEntity } from "../../redux/entities/actions";
import UIDataEntities from "../../types/redux/entities";

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

  const dispatch = useAppDispatch();

  const snapCoordinateToGrid = (deltaCoordinate, gridSnap) => {
    return Math.round(deltaCoordinate / gridSnap) * gridSnap;
  };

  const onDragStop = (_e, delta) => {
    console.log(delta)
    const xPosition = snapCoordinateToGrid(delta.x, GRID_SNAP);
    const yPosition = snapCoordinateToGrid(delta.y, GRID_SNAP);

    dispatch(updateEntity(UIDataEntities.doors, {
      id,
      xPosition,
      yPosition
    }));
  };

  const onDoubleClick: OnDoubleClickType = () => {
    if(orientation === Directions.NORTH_SOUTH) {
      dispatch(updateEntity(UIDataEntities.doors, {
        id,
        width: height,
        height: width,
        orientation: Directions.EAST_WEST
      }));

      return;
    };

    if(orientation === Directions.EAST_WEST) {
      dispatch(updateEntity(UIDataEntities.doors, {
        id,
        width: height,
        height: width,
        orientation: Directions.NORTH_SOUTH
      }));

      return;
    };
  };

  const evaluateDoorColor = (isDisabled, isHighlighted, tag): string => {
    if(isDisabled) {
      return "disabled";

    } else if(isHighlighted) {
      return tag;

    } else {
      return "black";
    };
  };

  return (
    !isHidden && (
      <DraggableComponent
        dragGrid={ [ GRID_SNAP, GRID_SNAP ] }
        enableResizing={ false }
        xPosition={ xPosition }
        yPosition={ yPosition }
        width={ width }
        height={ height }
        onDragStop={ onDragStop }
        onDoubleClick={ onDoubleClick }
        disableDragging={ isLocked || isDisabled }
      >
        { !isDisabled && (
          <DoorHUD
            id={ id }
            label={ label }
            isHidden={ isHidden }
            isLocked={ isLocked }
          /> 
        ) }
        <StyledDoor 
          $width={ width }
          $height={ height }
          $orientation={ orientation }
          $variant={ evaluateDoorColor(isDisabled, isHighlighted, tag) }
        />
      </DraggableComponent>
    )
  )
};

export default Door;
