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
  selectedEntity
}) => {
  const GRID_SNAP: number = 25;
  const CANVAS_MINIMUM_SIZE = 0;

  const currentRoom = useRef(null);
  const transformers = useRef(null);

  enum RoomStatuses {
    Stationary = "Stationary",
    Dragging = "Dragging",
    Resizing = "Resizing",
    Colliding = "Colliding"
  }

  const [ elementStatus, setElementStatus ] = useState<RoomStatuses>(RoomStatuses.Stationary);

  useEffect(() => {
    if(isActive) {
      transformers.current.nodes([currentRoom.current]);
      transformers.current.getLayer().batchDraw();
    };
  }, [isActive]);

  useEffect(() => {
    if(transformers.current) {
      transformers.current.moveToTop();
    };
  }, [transformers.current]);

  const dispatch = useAppDispatch();

  const canvasSize = useAppSelector(state => state.canvasSize);
  const currentDoors = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors, {
    filters: { room: id }
  }));
  const currentWindows = useAppSelector(AppDataSelectors.selectAppData(AppData.Windows, {
    filters: { room: id }
  }));

  const [ dangerDoors, setDangerDoors ] = useState([]);
  const [ isColliding, setIsColliding ] = useState(false);

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

  const detectCollisionX = (collidingObject) => {
    const otherRooms = rooms.filter(room => room.id !== collidingObject.id);

    return otherRooms.length && otherRooms.every(room => {
      return (
        collidingObject.x < room.xPosition + room.width &&
        collidingObject.x + collidingObject.width > room.xPosition &&
        collidingObject.y < room.yPosition + room.height &&
        collidingObject.y + collidingObject.height > room.yPosition
      );
    });
  };

  const detectCanvasBoundaries = (collidingObject) => {
    return (
      collidingObject.x < CANVAS_MINIMUM_SIZE ||
      collidingObject.x > canvasSize - width ||
      collidingObject.y < CANVAS_MINIMUM_SIZE ||
      collidingObject.y > canvasSize - height
    )
  };

  const detectCanvasBoundariesX = (collidingObject) => {
    return (
      collidingObject.x < CANVAS_MINIMUM_SIZE ||
      collidingObject.x + collidingObject.width > canvasSize ||
      collidingObject.y < CANVAS_MINIMUM_SIZE ||
      collidingObject.y + collidingObject.height > canvasSize
    )
  };

  const onDragMove = e => {

    setElementStatus(RoomStatuses.Dragging);

    const elementPosition = e.target.absolutePosition();
    const collidingObject = {
      x: elementPosition.x,
      y: elementPosition.y,
      width,
      height
    };

    if(detectCanvasBoundaries(collidingObject)) {
      setElementStatus(RoomStatuses.Colliding);
      elementPosition.x = xPosition;
      elementPosition.y = yPosition;
      e.target.absolutePosition(elementPosition);
      return;
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
          setElementStatus(RoomStatuses.Colliding);
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
    setElementStatus(RoomStatuses.Stationary);
    dangerDoors.forEach(dangerDoor => {
      dispatch(entityActions.deleteEntity(AppData.Doors, dangerDoor)) 
    });
  };

  const onTransformEnd = e => {
    const node = e.target;

    const scaledWidth = node.width() * node.scaleX();
    const scaledHeight = node.height() * node.scaleY();
    const newWidth = snapCoordinateToGrid(scaledWidth, GRID_SNAP);
    const newHeight = snapCoordinateToGrid(scaledHeight, GRID_SNAP);

    node.scaleX(1);
    node.scaleY(1);

    dispatch(entityActions.updateEntity(AppData.Rooms, {
      id,
      width: newWidth,
      height: newHeight
    }));
  }

  const onClick = () => { 
    if(selectedEntity) {
      return;
    };
    
    if(isDisabled) {
      return;
    };

    if(isActive) {
      dispatch(entityActions.resetActiveId(AppData.Rooms));
      return;
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
          status={ elementStatus }
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
        draggable={ !isDisabled }
        onDragMove={ onDragMove }
        onDragEnd={ onDragEnd }
        onTransformEnd={ onTransformEnd }
        onClick={ onClick }
      />
      { !isDisabled && isActive && (
        <Transformer
          ref={ transformers }
          boundBoxFunc={ (oldBox, newBox) => {

            setElementStatus(RoomStatuses.Resizing);

            const oldBoxWidth = oldBox.width;
            const oldBoxHeight = oldBox.height;
            const oldBoxX = oldBox.x;
            const oldBoxY = oldBox.y;

            const newBoxWidth = newBox.width;
            const newBoxHeight = newBox.height;
            const newBoxX = newBox.x;
            const newBoxY = newBox.y;

            if(detectCanvasBoundariesX(newBox)) {
              setElementStatus(RoomStatuses.Colliding);

              oldBox.width = snapCoordinateToGrid(oldBoxWidth, GRID_SNAP);
              oldBox.height = snapCoordinateToGrid(oldBoxHeight, GRID_SNAP);
              return oldBox ;
            };

            if(detectCollisionX({ ...newBox, id })) {
              setElementStatus(RoomStatuses.Colliding);

              oldBox.width = snapCoordinateToGrid(oldBoxWidth, GRID_SNAP);
              oldBox.height = snapCoordinateToGrid(oldBoxHeight, GRID_SNAP);
              oldBox.x = snapCoordinateToGrid(oldBoxX, GRID_SNAP);
              oldBox.y = snapCoordinateToGrid(oldBoxY, GRID_SNAP)
              return oldBox ;
            };

            newBox.width = snapCoordinateToGrid(newBoxWidth, GRID_SNAP);
            newBox.height = snapCoordinateToGrid(newBoxHeight, GRID_SNAP);
            newBox.x = snapCoordinateToGrid(newBoxX, GRID_SNAP);
            newBox.y = snapCoordinateToGrid(newBoxY, GRID_SNAP);

            return newBox;
          } }
          flipEnabled={ false }
          rotateEnabled={ false }
        />
      ) }
    </Group>
  )
};

export default Room;
