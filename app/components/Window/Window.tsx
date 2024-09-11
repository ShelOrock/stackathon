import React from "react";
import { useAppDispatch } from "../../hooks";

import StyledWindow from "./styles";

import DraggableComponent from "../DraggableComponent";

import { entityActions } from "../../redux/actions";

import { AppData, Directions, Styles } from "../../enums";
import { ReactTypes } from "../../types";
import { ComponentPropTypes } from "./types";
import FloatingTools from "../FloatingTools";

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
    if(orientation === Directions.vertical) {
      dispatch(entityActions.updateEntity(AppData.Windows, {
        id,
        width: height,
        height: width,
        orientation: Directions.horizontal
      }));

      return;
    };

    if(orientation === Directions.horizontal) {
      dispatch(entityActions.updateEntity(AppData.Windows, {
        id,
        width: height,
        height: width,
        orientation: Directions.vertical
      }));

      return;
    };
  }

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
        {/* { !isDisabled && (
          <FloatingTools
            appDataType={ AppData.Windows }
            id={ id }
            label={ label }
            isHidden={ isHidden }
            isLocked={ isLocked }
            tag={ tag }
          />
        ) } */}
        <StyledWindow 
          $width={ width }
          $height={ height }
          $orientation={ orientation }
          $isDisabled={ isDisabled }
          $isHighlighted={ isHighlighted }
          $tag={ tag }
        />
      </DraggableComponent>
    )
  );
};

export default Window;
