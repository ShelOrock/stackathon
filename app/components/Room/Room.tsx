import React from "react";
import { useAppDispatch } from "../../hooks";

import { ReactTypes } from "../../types"
import DraggableComponent from "../DraggableComponent";
import { ComponentPropTypes } from "./types";
import StyledRoom from "./styles";
import { entityActions } from "../../redux/actions";
import { AppData, Styles } from "../../enums";
import FloatingTools from "../FloatingTools";
import { Rect } from "react-konva";

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
  tag = Styles.Colors.blue,
  rooms
}) => {

  const GRID_SNAP: number = 25;

  const dispatch = useAppDispatch();

  const snapCoordinateToGrid = (deltaCoordinate, gridSnap) => {
    return Math.round(deltaCoordinate / gridSnap) * gridSnap;
  };

  const onDrag = (e) => {
    const abs = e.target.absolutePosition();

    abs.x = snapCoordinateToGrid(abs.x, GRID_SNAP);
    abs.y = snapCoordinateToGrid(abs.y, GRID_SNAP);
    e.target.absolutePosition(abs);

    dispatch(entityActions.updateEntity(AppData.Rooms, {
      id,
      xPosition: abs.x,
      yPosition: abs.y
    }));
  };

  const onDragStop = (_e, delta) => {
    const xPosition = snapCoordinateToGrid(delta.x, GRID_SNAP);
    const yPosition = snapCoordinateToGrid(delta.y, GRID_SNAP);

    dispatch(entityActions.updateEntity(AppData.Rooms, {
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

    dispatch(entityActions.updateEntity(AppData.Rooms, {
      id,
      width,
      height,
      xPosition: position.x,
      yPosition: position.y
    }));
  };

  const onDoubleClick: ReactTypes.HandlerTypes.OnClickType = () => dispatch(entityActions.updateEntity(AppData.Rooms, { id, isHighlighted: !isHighlighted }))

  return (
<>
    {/* !isDisabled && (
      <FloatingTools
        appDataType={ AppData.Rooms }
        id={ id }
        label={ label }
        isHidden={ isHidden }
        isLocked={ isLocked }
        tag={ tag }
      />
    ) */}
    <Rect
      x={ xPosition }
      y={ yPosition }
      width={ width }
      height={ height }
      fill={ "transparent" }
      stroke={ tag }
      strokeWidth={ 2 }
      draggable
      onDragMove={ onDrag }
    />
    {/* <StyledRoom 
      $width={ width }
      $height={ height }
      $isDisabled={ isDisabled }
      $isHighlighted={ isHighlighted }
      $tag={ tag }
    /> */}
    </>
  )
};

export default Room;
