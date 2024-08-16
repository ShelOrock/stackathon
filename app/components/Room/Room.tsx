import React from "react";
import { useAppDispatch } from "../../hooks";

import RoomHUD from "./RoomHUD";

import { updateRoom } from "../../redux/rooms/actions"

import {
  OnDragStopType,
  OnResizeType,
  OnDoubleClickType,
} from "../../types"
import DraggableComponent from "../DraggableComponent";
import { ComponentPropTypes } from "./types";
import StyledRoom from "./styles";

const Room: React.FC<ComponentPropTypes> = ({
  index,
  isDisabled,
  isHidden,
  isHighlighted,
  isLocked,
  height,
  width,
  xPosition,
  yPosition,
  xPos,
  yPos,
  tag,
  variant
}) => {

  const GRID_SNAP: number = 25;

  const dispatch = useAppDispatch();

  const snapCoordinateToGrid = (deltaCoordinate, gridSnap) => {
    return Math.round(deltaCoordinate / gridSnap) * gridSnap;
  };

  const onDragStop: OnDragStopType = (_e, delta) => {
    const xPosition = snapCoordinateToGrid(delta.x, GRID_SNAP);
    const yPosition = snapCoordinateToGrid(delta.y, GRID_SNAP);

    dispatch(updateRoom({
      index,
      xPos: xPosition,
      yPos: yPosition
    }));
  }

  const onResize: OnResizeType = (
    _e,
    _direction,
    ref,
    _delta,
    position
  ) => {
    const width = snapCoordinateToGrid(parseInt(ref.style.width), GRID_SNAP);
    const height = snapCoordinateToGrid(parseInt(ref.style.height), GRID_SNAP);

    dispatch(updateRoom({
      index,
      width,
      height,
      xPos: position.x,
      yPos: position.y
    }));
  };

  const onDoubleClick: OnDoubleClickType = () => dispatch(updateRoom({ index, isHighlighted: !isHighlighted }))

  const evaluateRoomColor = (isDisabled, isHighlighted, tag): string => {
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
        disableDragging={ isLocked || isDisabled }
        dragGrid={ [ GRID_SNAP, GRID_SNAP ] }
        enableResizing={ !isLocked && !isDisabled }
        resizeGrid={ [ GRID_SNAP, GRID_SNAP ] }
        xPosition={ xPos } // TODO: Change to xPosition
        yPosition={ yPos } // TODO: Change to yPosition
        width={ width }
        height={ height }
        onDragStop={ onDragStop }
        onResize={ onResize }
        onDoubleClick={ onDoubleClick }
      >
        { !isDisabled && (
          <RoomHUD
            
          />
        ) }
        <StyledRoom 
          $width={ width }
          $height={ height }
          $variant={ evaluateRoomColor(isDisabled, isHighlighted, tag) }
        />
      </DraggableComponent>
    )
  );
};

export default Room;
