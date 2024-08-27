import React from "react";
import { useAppDispatch } from "../../hooks";

import StyledDoor from "./styles";

import DoorHUD from "./DoorHUD";
import DraggableComponent from "../DraggableComponent";

import { AppData, Directions } from "../../enums";
import { ComponentPropTypes } from "./types";
import { entityActions } from "../../redux/actions";
import { ReactTypes } from "../../types";

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
    const xPosition = snapCoordinateToGrid(delta.x, GRID_SNAP);
    const yPosition = snapCoordinateToGrid(delta.y, GRID_SNAP);

    dispatch(entityActions.updateEntity(AppData.Doors, {
      id,
      xPosition,
      yPosition
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
          $isDisabled={ isDisabled }
          $isHighlighted={ isHighlighted }
          $tag={ tag }
        />
      </DraggableComponent>
    )
  )
};

export default Door;
