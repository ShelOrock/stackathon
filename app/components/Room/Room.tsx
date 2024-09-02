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

  const detectCollision = (
    collidingObject,
    stationaryObject
  ) => (
    collidingObject.x + collidingObject.width > stationaryObject.x &&
    collidingObject.x < stationaryObject.x + stationaryObject.width && 
    collidingObject.y + collidingObject.height > stationaryObject.y &&
    collidingObject.y < stationaryObject.y + stationaryObject.height
  );

  const onDrag = e => {

    const elementPosition = e.target.absolutePosition();
    const collidingObject = {
      x: elementPosition.x,
      y: elementPosition.y,
      width,
      height
    };

    if(elementPosition.x < 0 || elementPosition.x > 600 - width || elementPosition.y < 0 || elementPosition.y > 600 - height) {
      elementPosition.x = xPosition;
      elementPosition.y = yPosition;
      e.target.absolutePosition(elementPosition);
    }

    rooms.forEach(room => {
      if(room.id !== id) {

        const stationaryObject = {
          x: room.xPosition,
          y: room.yPosition,
          width: room.width,
          height: room.height
        };

        if(detectCollision(collidingObject, stationaryObject)) {
          elementPosition.x = xPosition;
          elementPosition.y = yPosition;
          e.target.absolutePosition(elementPosition);
        };
      };
    });
    
    elementPosition.x = snapCoordinateToGrid(elementPosition.x, GRID_SNAP);
    elementPosition.y = snapCoordinateToGrid(elementPosition.y, GRID_SNAP);
    e.target.absolutePosition(elementPosition);
    dispatch(entityActions.updateEntity(AppData.Rooms, {
      id,
      xPosition: elementPosition.x,
      yPosition: elementPosition.y
    }));
  };

  const onDragStop = e => {
    const elementPosition = e.target.absolutePosition();

    elementPosition.x = snapCoordinateToGrid(elementPosition.x, GRID_SNAP);
    elementPosition.y = snapCoordinateToGrid(elementPosition.y, GRID_SNAP);
    e.target.absolutePosition(elementPosition);

    dispatch(entityActions.updateEntity(AppData.Rooms, {
      id,
      xPosition: elementPosition.x,
      yPosition: elementPosition.y
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
      stroke={ isHighlighted ? tag : "black" }
      strokeWidth={ 2 }
      draggable
      onDragMove={ onDrag }
      onDragEnd={ onDragStop }
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
