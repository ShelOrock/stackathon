import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector, useDetectRoomCollision } from "../../hooks";

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
    if(isActive) {
      transformers.current.nodes([currentRoom.current]);
      transformers.current.getLayer().batchDraw();
    };
  }, [isActive]);

  const dispatch = useAppDispatch();

  const canvasSize = useAppSelector(state => state.canvasSize);
  const currentDoors = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors, {
    filters: { room: id }
  }));
  const currentWindows = useAppSelector(AppDataSelectors.selectAppData(AppData.Windows, {
    filters: { room: id }
  }));

  const [ dangerDoors, setDangerDoors ] = useState([]);

  const snapCoordinateToGrid = (deltaCoordinate, gridSnap) => {
    return Math.round(deltaCoordinate / gridSnap) * gridSnap;
  };

  const detectCollision = (
    collidingObject,
    stationaryObject
  ) => (
    collidingObject.x + collidingObject.width >= stationaryObject.x &&
    collidingObject.x <= stationaryObject.x + stationaryObject.width && 
    collidingObject.y + collidingObject.height >= stationaryObject.y &&
    collidingObject.y <= stationaryObject.y + stationaryObject.height
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

        const dangerDoors = [];

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

          currentDoors.forEach(door => {
            const collidingObject = {
              x: door.xPosition,
              y: door.yPosition,
              width: door.width,
              height: door.height
            };

            if(detectCollision(collidingObject, stationaryObject)) {
              dangerDoors.push(door.id);
            } else {
              dangerDoors.filter(dangerDoor => dangerDoor === door.id)
            };
          });
        };

        setDangerDoors(dangerDoors);
      };
    });

    elementPosition.x = snapCoordinateToGrid(elementPosition.x, GRID_SNAP);
    elementPosition.y = snapCoordinateToGrid(elementPosition.y, GRID_SNAP);
    e.target.absolutePosition(elementPosition);

    if(elementPosition.x !== xPosition || elementPosition.y !== yPosition) {
      dispatch(entityActions.updateEntity(AppData.Rooms, {
        id,
        xPosition: elementPosition.x,
        yPosition: elementPosition.y
      }));

      const deltaX = elementPosition.x - xPosition;
      const deltaY = elementPosition.y - yPosition;

      currentDoors.forEach(door => {
        dispatch(entityActions.updateEntity(AppData.Doors, {
          id: door.id,
          xPosition: door.xPosition + deltaX,
          yPosition: door.yPosition + deltaY
        }));
      });

      currentWindows.forEach(window => {
        dispatch(entityActions.updateEntity(AppData.Windows, {
          id: window.id,
          xPosition: window.xPosition + deltaX,
          yPosition: window.yPosition + deltaY
        }));
      });
    };
  };

  const onDragEnd = () => {
    dangerDoors.forEach(dangerDoor => {
      dispatch(entityActions.deleteEntity(AppData.Doors, dangerDoor)) 
    });
  };

  const onTransform = () => {
    const node = currentRoom.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    let newWidth = snapCoordinateToGrid(node.width() * scaleX, GRID_SNAP);
    let newHeight = snapCoordinateToGrid(node.height() * scaleY, GRID_SNAP);
    const newX = snapCoordinateToGrid(node.x() - (newWidth - node.width() * scaleX), GRID_SNAP);
    const newY = snapCoordinateToGrid(node.y() - (newHeight - node.height() * scaleY), GRID_SNAP);

    if(newWidth < 25 || newHeight < 25) {
      return;
    };

    node.width(newWidth);
    node.height(newHeight);
    node.x(newX);
    node.y(newY);
    node.scaleX(1);
    node.scaleY(1);

    dispatch(entityActions.updateEntity(AppData.Rooms, {
      id,
      xPosition: newX,
      yPosition: newY,
      width: newWidth,
      height: newHeight
    }));
  };

  const handleTransformerBoundingBox = (oldBox, newBox) => {
    if(newBox.width < 25 || newBox.height < 25) {
      return oldBox;
    };

    newBox.width = snapCoordinateToGrid(newBox.width, GRID_SNAP);
    newBox.height = snapCoordinateToGrid(newBox.height, GRID_SNAP);
    return newBox
  }

  const onClick = () => {  
    if(isActive) {
      dispatch(entityActions.resetActiveId(AppData.Rooms));
      return
    };

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
        onDragEnd={ onDragEnd }
        onTransform={ onTransform }
        onClick={ onClick }
        // onTransformEnd={ onTransformEnd }
      />
      { isActive && (
        <Transformer
          ref={ transformers }
          boundBoxFunc={ handleTransformerBoundingBox }
          flipEnabled={ false }
          rotateEnabled={ false }
        />
      ) }
    </Group>
  )
};

export default Room;
