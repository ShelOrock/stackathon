import * as React from "react";
import { useAppDispatch } from "../../hooks";

import StyledWindow from "./styles";

import DraggableComponent from "../DraggableComponent";
import WindowHUD from "./WindowHUD";

import { entityActions } from "../../redux/actions";

import { AppData, Directions } from "../../enums";
import { ReactTypes } from "../../types";
import { ComponentPropTypes } from "./types";

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
  tag,
}) => {
  const GRID_SNAP: number = 25;

  const dispatch = useAppDispatch();

  const snapCoordinateToGrid = (deltaCoordinate, gridSnap) => {
    return Math.round(deltaCoordinate / gridSnap) * gridSnap;
  };

  const onDragStop: ReactTypes.RndTypes.OnDragStopType = (_e, delta) => {
    const xPosition = snapCoordinateToGrid(delta.x, GRID_SNAP);
    const yPosition = snapCoordinateToGrid(delta.y, GRID_SNAP);

    dispatch(entityActions.updateEntity(AppData.Windows, {
      id,
      xPosition,
      yPosition
    }));
  };

  const onDoubleClick: ReactTypes.HandlerTypes.OnClickType = () => {
    if(orientation === Directions.NORTH_SOUTH) {
      dispatch(entityActions.updateEntity(AppData.Windows, {
        id,
        width: height,
        height: width,
        orientation: Directions.EAST_WEST
      }));

      return;
    };

    if(orientation === Directions.EAST_WEST) {
      dispatch(entityActions.updateEntity(AppData.Windows, {
        id,
        width: height,
        height: width,
        orientation: Directions.NORTH_SOUTH
      }));

      return;
    };
  }

  const evaluateWindowColor = (isDisabled, isHighlighted, tag): string => {
    if(isDisabled) {
      return "disabled";

    } else if (isHighlighted) {
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
          <WindowHUD 
            id={ id }
            label={ label }
            isHidden={ isHidden }
            isLocked={ isLocked }
          />
        ) }
        <StyledWindow 
          $width={ width }
          $height={ height }
          $orientation={ orientation }
          $variant={ evaluateWindowColor(isDisabled, isHighlighted, tag ) }
        />
      </DraggableComponent>
    )
  );
};

export default Window;
