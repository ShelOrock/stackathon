import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";

import { ComponentPropTypes } from "./types";
import { entityActions } from "../../redux/actions";
import { AppData, Styles } from "../../enums";
import FloatingTools from "../FloatingTools";
import { Group, Rect, Transformer } from "react-konva";
import { Html } from "react-konva-utils";
import theme from "../../theme";
import { AppDataSelectors } from "../../redux/selectors";

const Room: React.FC<ComponentPropTypes> = ({
  id,
  label,
  isActive = false,
  isDisabled = false, 
  isHidden = false,
  isHighlighted = false,
  isLocked = false,
  height,
  width,
  xPosition,
  yPosition,
  tag = Styles.Colors.blue,
  rooms,
}) => {
  const GRID_SNAP: number = 25;
  const CANVAS_MINIMUM_SIZE = 0;

  const currentRoom = useRef(null);
  const transformers = useRef(null);

  useEffect(() => {
    if(!currentRoom) {
      transformers.current.nodes([currentRoom.current]);
      transformers.current.getLayer().batchDraw();
    };
  }, [currentRoom]);

  const dispatch = useAppDispatch();

  const canvasSize = useAppSelector(state => state.canvasSize);
  const currentDoors = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors, {
    filters: { room: id }
  }));

  console.log(currentDoors)

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
  };

  const onTransform = () => {
    const node = currentRoom.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    dispatch(entityActions.updateEntity(AppData.Rooms, {
      id,
      xPosition: snapCoordinateToGrid(node.x(), GRID_SNAP),
      yPosition: snapCoordinateToGrid(node.y(), GRID_SNAP),
      width: snapCoordinateToGrid(node.width() * scaleX, GRID_SNAP),
      height: snapCoordinateToGrid(node.height() * scaleY, GRID_SNAP)
    }));
  };

  const onClick = () => {
    dispatch(entityActions.setActiveId(AppData.Rooms, id));
  };

  return (
    <Group>
    { !isDisabled && isActive && (
      <Html>
        <FloatingTools
          appDataType={ AppData.Rooms }
          id={ id }
          label={ label }
          isHidden={ isHidden }
          isLocked={ isLocked }
          tag={ tag }
          xPosition={ xPosition }
          yPosition={ yPosition }
        />
      </Html>
    ) }
      <Rect
        x={ xPosition }
        y={ yPosition }
        width={ width }
        height={ height }
        ref={ currentRoom }
        fill={ "transparent" }
        stroke={ isDisabled ? theme.colors.disabled : isHighlighted ? theme.colors[tag].default : theme.colors.black }
        strokeWidth={ 5 }
        draggable
        onDragMove={ onDragMove }
        onDragEnd={ onDragStop }
        onTransform={ onTransform }
        onClick={ onClick }
      />
      { !isDisabled && (<Transformer
        ref={ transformers }
        boundBoxFunc={ (oldBox, newBox) => {

          if(oldBox.width <= GRID_SNAP || oldBox.height <= GRID_SNAP) {
            return oldBox;
          };

          const newX = snapCoordinateToGrid(newBox.x, GRID_SNAP);
          const newY = snapCoordinateToGrid(newBox.y, GRID_SNAP);

          const dx = newX - snapCoordinateToGrid(newBox.x,GRID_SNAP);
          const dy = newY - snapCoordinateToGrid(newBox.y, GRID_SNAP);

          newBox.x = newX;
          newBox.y = newY;
        
          newBox.width = snapCoordinateToGrid(newBox.width - dx, GRID_SNAP);
          newBox.height = snapCoordinateToGrid(newBox.height - dy, GRID_SNAP);

          return newBox;
        } }
        rotateEnabled={ false }
      />) }
    </Group>
  )
};

export default Room;
