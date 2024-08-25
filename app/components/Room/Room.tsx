import React from "react";
import { useAppDispatch } from "../../hooks";

import RoomHUD from "./RoomHUD";

import { ReactTypes } from "../../types"
import DraggableComponent from "../DraggableComponent";
import { ComponentPropTypes } from "./types";
import StyledRoom from "./styles";
import { updateEntity } from "../../redux/entities/actions";
import { AppData } from "../../enums";

const Room: React.FC<ComponentPropTypes> = ({
  id,
  label,
  isDisabled,
  isHidden,
  isHighlighted,
  isLocked,
  height,
  width,
  xPosition,
  yPosition,
  tag,
  variant
}) => {

  const GRID_SNAP: number = 25;

  const dispatch = useAppDispatch();

  const snapCoordinateToGrid = (deltaCoordinate, gridSnap) => {
    return Math.round(deltaCoordinate / gridSnap) * gridSnap;
  };

  const onDragStop = (_e, delta) => {
    const xPosition = snapCoordinateToGrid(delta.x, GRID_SNAP);
    const yPosition = snapCoordinateToGrid(delta.y, GRID_SNAP);

    dispatch(updateEntity(AppData.Rooms, {
      id,
      xPosition,
      yPosition
    }));
  }

  const onResize: ReactTypes.RndTypes.OnResizeType = (
    _e,
    _direction,
    ref,
    _delta,
    position
  ) => {
    const width = snapCoordinateToGrid(parseInt(ref.style.width), GRID_SNAP);
    const height = snapCoordinateToGrid(parseInt(ref.style.height), GRID_SNAP);

    dispatch(updateEntity(AppData.Rooms, {
      id,
      width,
      height,
      xPosition: position.x,
      yPosition: position.y
    }));
  };

  const onDoubleClick: ReactTypes.HandlerTypes.OnClickType = () => dispatch(updateEntity(AppData.Rooms, { id, isHighlighted: !isHighlighted }))

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
        xPosition={ xPosition }
        yPosition={ yPosition }
        width={ width }
        height={ height }
        onDragStop={ onDragStop }
        onResize={ onResize }
        onDoubleClick={ onDoubleClick }
      >
        { !isDisabled && (
          <RoomHUD
            id={ id }
            label={ label }
            isHidden={ isHidden }
            isLocked={ isLocked }
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
