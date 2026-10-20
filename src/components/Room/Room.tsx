import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";

import { ComponentPropTypes } from "./types";
import { entityActions } from "../../redux/actions";
import { AppData, Styles } from "../../enums";
import FloatingTools from "../FloatingTools";
import { Group, Rect, Transformer } from "react-konva";
import { Html } from "react-konva-utils";
import { AppDataSelectors } from "../../redux/selectors";
import Konva from "konva";
import theme from "../../theme/index";

import { utilities, Elements, Geometry } from "../../domain";

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

  const currentRoom = useRef<Konva.Rect | null>(null);
  const transformers = useRef<Konva.Transformer | null>(null);

  enum RoomStatuses {
    Stationary = "Stationary",
    Dragging = "Dragging",
    Resizing = "Resizing",
    Colliding = "Colliding"
  }

  const [ elementStatus, setElementStatus ] = useState<RoomStatuses>(RoomStatuses.Stationary);

  useEffect(() => {
    if(isActive) {
      if(transformers.current) {
        if(currentRoom.current) {
          transformers.current.nodes([ currentRoom.current ]);

          const layer = transformers.current.getLayer();
          if(layer) {
            layer.batchDraw();
          };
        };
      }
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

  const [ dangerDoors, setDangerDoors ] = useState<number[]>([]);
  const [ isColliding, setIsColliding ] = useState(false);

  const snapCoordinateToGrid = (deltaCoordinate: number, gridSnap: number): number => {
    return Math.round(deltaCoordinate / gridSnap) * gridSnap;
  };

  const detectAllRooms = (collidingObject: Elements.Room) => {
    const otherRooms = rooms.filter(room => room.id !== collidingObject.id);

    return otherRooms.length && otherRooms.every(room => {
      return (
        utilities.intersects(room, collidingObject.boundary)
      );
    });
  };

  const onDragMove = (e: Konva.KonvaEventObject<DragEvent>) => {

    setElementStatus(RoomStatuses.Dragging);

    const elementPosition = e.target.absolutePosition();
    const collidingObject = {
      position: {
        x: elementPosition.x,
        y: elementPosition.y
      },
      size: {
        width,
        height
      }
    };

    const canvas = {
      position: {
        x: CANVAS_MINIMUM_SIZE,
        y: CANVAS_MINIMUM_SIZE
      },
      size: {
        width: canvasSize,
        height: canvasSize
      }
    }

    if(utilities.contains(canvas, collidingObject)) {
      setElementStatus(RoomStatuses.Colliding);
      elementPosition.x = xPosition;
      elementPosition.y = yPosition;
      e.target.absolutePosition(elementPosition);
      return;
    };

    rooms.forEach(room => {
      if(room.id !== id) {

        const dangerDoors: number[] = [];

        const stationaryObject = {
          position: {
            x: room.xPosition,
            y: room.yPosition
          },
          size: {
            width: room.width,
            height: room.height
          }
        };

        if(utilities.intersects(collidingObject, stationaryObject)) {
          setElementStatus(RoomStatuses.Colliding);
          elementPosition.x = xPosition;
          elementPosition.y = yPosition;
          e.target.absolutePosition(elementPosition);

          currentDoors.forEach((door: Elements.Door) => {
            const collidingObject = {
              position: {
                x: door.transform.position.x,
                y: door.transform.position.y
              },
              size: {
                width: door.transform.scale.x,
                height: door.transform.scale.y
              }
            };

            if(utilities.intersects(collidingObject, stationaryObject)) {
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

      currentDoors.forEach((door: Elements.Door) => {
        dispatch(entityActions.updateEntity(AppData.Doors, {
          id: door.id,
          xPosition: door.transform.position.x + deltaX,
          yPosition: door.transform.position.y + deltaY
        }));
      });

      currentWindows.forEach((window: Elements.Window) => {
        dispatch(entityActions.updateEntity(AppData.Windows, {
          id: window.id,
          xPosition: window.transform.position.x + deltaX,
          yPosition: window.transform.position.y + deltaY
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

  const onTransformEnd = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const node = e.target;

    const scaledWidth = node.width() * node.scaleX();
    const scaledHeight = node.height() * node.scaleY();
    const newWidth = snapCoordinateToGrid(scaledWidth, GRID_SNAP);
    const newHeight = snapCoordinateToGrid(scaledHeight, GRID_SNAP);

    node.scaleX(1);
    node.scaleY(1);

    dispatch(entityActions.updateEntity(AppData.Rooms, {
      id,
      xPosition: node.x(),
      yPosition: node.y(),
      width: newWidth,
      height: newHeight
    }));
  };

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
        />
      </Html>
    ) }
      <Html>
        <p
          style={{
            margin: 0,
            position: "absolute",
            top: yPosition + width,
            left: xPosition
          }}
        >{ elementStatus }</p>
      </Html>
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
        strokeScaleEnabled={ false }
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

            const newBoxObject = {
              position: {
                x: newBoxX,
                y: newBoxY,
              },
              size: {
                width: newBoxWidth,
                height: newBoxHeight
              }
            }

            const canvas = {
              position: {
                x: CANVAS_MINIMUM_SIZE,
                y: CANVAS_MINIMUM_SIZE
              },
              size: {
                width: canvasSize,
                height: canvasSize
              }
            }

            if(utilities.contains(canvas, newBoxObject)) {
              setElementStatus(RoomStatuses.Colliding);

              oldBox.width = snapCoordinateToGrid(oldBoxWidth, GRID_SNAP);
              oldBox.height = snapCoordinateToGrid(oldBoxHeight, GRID_SNAP);
              return oldBox ;
            };

            if(detectAllRooms({
              ...newBox,
              id,
              type: "room",
              name: "",
              boundary: {
                position: {
                  x: 0,
                  y: 0
                },
                size: {
                  width: 0,
                  height: 0
                }
              },
              transform: {
                position: {
                  x: 0,
                  y: 0
                },
                rotation: 0,
                scale: {
                  x: 0,
                  y: 0
                }
              }
            })) {
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
          ignoreStroke
        />
      ) }
    </Group>
  )
};

export default Room;
