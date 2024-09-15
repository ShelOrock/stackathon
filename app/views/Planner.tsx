import React, { useEffect, useRef, useState } from "react";
import { Layer } from "react-konva";

import Stage from "../components/Canvas";
import LayerPanel from "../components/LayerPanel";
import Row from "../components/Row";
import Grid from "../components/Grid";
import ComponentMapping from "../components/ComponentMapping";
import Room from "../components/Room";

import { useAppDispatch, useAppSelector } from "../hooks";
import { AppData, Directions, Styles } from "../enums";
import { AppDataSelectors } from "../redux/selectors";
import ToolsPanel from "../components/ToolsPanel";
import { entityActions, selectedEntityActions } from "../redux/actions";
import * as utilities from "../utilities";
import RoomPreview from "../components/RoomPreview.tsx/RoomPreview";
import DoorPreview from "../components/DoorPreview";
import WindowPreview from "../components/WindowPreview";

const Planner = () => {

  const createDefaultEntity = (entity, {
    id,
    floorId,
    xPosition,
    yPosition,
    orientation,
    roomId
  }) => {
    switch(entity) {
      case AppData.Rooms:
        return {
          id,
          label: `Untitled Room ${ id }`,
          floor: floorId,
          width: 100,
          height: 100,
          zAxis: 2,
          xPosition,
          yPosition,
          isHighlighted: false,
          isLocked: false,
          isHidden: false,
          tag: Styles.Colors.blue,
        };

      case AppData.Doors:
        return {
          id,
          label: `Untitled Door ${ id }`,
          floor: floorId,
          room: roomId,
          width: 25,
          height: 6,
          orientation,
          xPosition,
          yPosition,
          isHighlighted: false,
          isLocked: false,
          isHidden: false,
          tag: Styles.Colors.blue
        };

      case AppData.Windows:
        return {
          id, 
          label: `Untilited Window ${ id }`,
          floor: floorId,
          room: roomId,
          width: 25,
          height: 6,
          orientation,
          xPosition,
          yPosition,
          isHighlighted: false,
          isLocked: false,
          isHidden: false,
          tag: Styles.Colors.blue
        };
      
      default:
        return;
    };
  };

  const CANVAS_MINIMUM_SIZE = 0;
  const DEFAULT_ROOM_DIMENSION = 100;
  const ROOM_OFFSET = 50;
  const DEFAULT_DOOR_X_DIMENSION = 25;
  const DEFAULT_DOOR_Y_DIMENSION = 6;
  const DOOR_X_OFFSET = 0;
  const DOOR_Y_OFFSET = 0;
  const DOOR_TOLERANCE = 12;
  const GRID_SNAP = 25;

  const dispatch = useAppDispatch();

  const [ mouse, setMouse ] = useState({ x: 0, y: 0 });
  const [ lastMouse, setLastMouse ] = useState({ x: 0, y: 0 });
  const [ isRoomColliding, setIsRoomColliding ] = useState(false);
  const [ doorPreviewOrientation, setDoorPreviewOrientation ] = useState<Directions>(Directions.horizontal);
  const [ windowPreviewOrientation, setWindowPreviewOrientation ] = useState<Directions>(Directions.horizontal);
  const [ currentRoom, setCurrentRoom ] = useState(null);

  const canvasSize = useAppSelector(state => state.canvasSize);
  const gridIsShowing = useAppSelector(state => state.toggleElements.grid.isShowing);
  const selectedEntity = useAppSelector(state => state.selectedEntity);

  const activeFloor = useAppSelector(AppDataSelectors.selectActiveAppData(AppData.Floors, {
    attributes: [ "id" ]
  }));
  const rooms = useAppSelector(AppDataSelectors.selectAppData(AppData.Rooms));
  const activeFloorRooms = useAppSelector(AppDataSelectors.selectAppData(AppData.Rooms, {
    filters: { floor: activeFloor.id }
  }));
  const activeRoom = useAppSelector(AppDataSelectors.selectActiveAppData(AppData.Rooms, {
    attributes: [ "id" ]
  }));
  const doors = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors));
  const windows = useAppSelector(AppDataSelectors.selectAppData(AppData.Windows));

  const ref = useRef(null);

  const detectCollision = (
    collidingObject,
    stationaryObject
  ) => (
    collidingObject.x + collidingObject.width > stationaryObject.x &&
    collidingObject.x < stationaryObject.x + stationaryObject.width && 
    collidingObject.y + collidingObject.height > stationaryObject.y &&
    collidingObject.y < stationaryObject.y + stationaryObject.height
  );

  const detectCanvasBoundaries = (collidingObject, xOffset, yOffset) => (
    collidingObject.x < CANVAS_MINIMUM_SIZE ||
    collidingObject.x > canvasSize - xOffset ||
    collidingObject.y < CANVAS_MINIMUM_SIZE ||
    collidingObject.y > canvasSize - yOffset
  );

  const detectLeftRoomBoundary = (collidingObject, stationaryObject) => (
    collidingObject.x + DOOR_TOLERANCE >= stationaryObject.x &&
    collidingObject.x - DOOR_TOLERANCE <= stationaryObject.x &&
    collidingObject.y >= stationaryObject.y &&
    collidingObject.y < stationaryObject.y + stationaryObject.height
  );

  const detectRightRoomBoundary = (collidingObject, stationaryObject) => (
    collidingObject.x + DOOR_TOLERANCE >= stationaryObject.x + stationaryObject.width &&
    collidingObject.x - DOOR_TOLERANCE <= stationaryObject.x + stationaryObject.width &&
    collidingObject.y >= stationaryObject.y &&
    collidingObject.y < stationaryObject.y + stationaryObject.height
  );

  const detectTopRoomBoundary = (collidingObject, stationaryObject) => (
    collidingObject.y + DOOR_TOLERANCE >= stationaryObject.y &&
    collidingObject.y - DOOR_TOLERANCE <= stationaryObject.y &&
    collidingObject.x >= stationaryObject.x &&
    collidingObject.x < stationaryObject.x + stationaryObject.width
  );

  const detectBottomRoomBoundary = (collidingObject, stationaryObject) => (
    collidingObject.y + DOOR_TOLERANCE >= stationaryObject.y + stationaryObject.height &&
    collidingObject.y - DOOR_TOLERANCE <= stationaryObject.y + stationaryObject.height &&
    collidingObject.x >= stationaryObject.x &&
    collidingObject.x < stationaryObject.x + stationaryObject.width
  );

  const handleOnMouseMove = e => {
    const stage = e.target.getStage();
    const mousePositionX = Math.round(stage.getPointerPosition().x / GRID_SNAP) * GRID_SNAP;
    const mousePositionY = Math.round(stage.getPointerPosition().y / GRID_SNAP) * GRID_SNAP;

    if(selectedEntity === AppData.Rooms) {
      const collidingObject = {
        x: mousePositionX - ROOM_OFFSET,
        y: mousePositionY - ROOM_OFFSET,
        width: DEFAULT_ROOM_DIMENSION,
        height: DEFAULT_ROOM_DIMENSION
      };

      if(detectCanvasBoundaries(collidingObject, DEFAULT_ROOM_DIMENSION, DEFAULT_ROOM_DIMENSION)) {
        setIsRoomColliding(true);
      };

      activeFloorRooms.forEach(room => {
        const stationaryObject = {
          x: room.xPosition,
          y: room.yPosition,
          width: room.width,
          height: room.height
        };

        if(detectCollision(collidingObject, stationaryObject)) {
          setIsRoomColliding(true)
        };
      });

      if(isRoomColliding) {
        setIsRoomColliding(false);
      } else {
        setLastMouse({
          x: mouse.x,
          y: mouse.y
        });

        setMouse({
          x: mousePositionX,
          y: mousePositionY
        });
      };
    };

    if(selectedEntity === AppData.Doors || selectedEntity === AppData.Windows) {
      const collidingObject = {
        x: mousePositionX - DOOR_X_OFFSET,
        y: mousePositionY - DOOR_Y_OFFSET,
        width: DEFAULT_ROOM_DIMENSION,
        height: DEFAULT_ROOM_DIMENSION
      };

      activeFloorRooms.forEach(room => {
        const stationaryObject = {
          x: room.xPosition,
          y: room.yPosition,
          width: room.width,
          height: room.height
        };

        if(detectLeftRoomBoundary(collidingObject, stationaryObject) || detectRightRoomBoundary(collidingObject, stationaryObject)) {
          setDoorPreviewOrientation(Directions.vertical);
          setWindowPreviewOrientation(Directions.vertical);
          setCurrentRoom(room.id)

          setMouse({
            x: mousePositionX,
            y: mousePositionY
          });
        };

        if(detectTopRoomBoundary(collidingObject, stationaryObject) || detectBottomRoomBoundary(collidingObject, stationaryObject)) {
          setDoorPreviewOrientation(Directions.horizontal);
          setWindowPreviewOrientation(Directions.horizontal);
          setCurrentRoom(room.id)

          setMouse({
            x: mousePositionX,
            y: mousePositionY
          });
        };
      });
    }; 
  };

  useEffect(() => {
    if(selectedEntity === AppData.Rooms) {
      if(isRoomColliding) {
        setMouse({
          x: lastMouse.x,
          y: lastMouse.y
        });
      };
    };
  }, [isRoomColliding]);

  const handleOnClick = e => {
    let id;

    switch(selectedEntity) {
      case AppData.Rooms:
        id = utilities.functions.findMissingId(rooms);

        const entity = createDefaultEntity(selectedEntity, {
          id,
          floorId: activeFloor.id,
          xPosition: mouse.x - ROOM_OFFSET,
          yPosition: mouse.y - ROOM_OFFSET,
          orientation: null,
          roomId: null
        });

        dispatch(entityActions.addEntity(selectedEntity, entity));
        dispatch(entityActions.setActiveId(selectedEntity, entity.id))

        if(!e.evt.shiftKey) {
          dispatch(selectedEntityActions.resetSelectEntity());
        };

        return;

      case AppData.Doors:
        if(currentRoom) {
          id = utilities.functions.findMissingId(doors);
          
          dispatch(entityActions.addEntity(selectedEntity, createDefaultEntity(selectedEntity, {
            id,
            floorId: activeFloor.id,
            xPosition: mouse.x,
            yPosition: mouse.y,
            orientation: doorPreviewOrientation === Directions.horizontal ? Directions.horizontal : Directions.vertical,
            roomId: currentRoom
          })));

          if(!e.evt.shiftKey) {
            dispatch(selectedEntityActions.resetSelectEntity());
          };
        };

        return;

      case AppData.Windows:
        if(currentRoom) {
          id = utilities.functions.findMissingId(windows);

          dispatch(entityActions.addEntity(selectedEntity, createDefaultEntity(selectedEntity, {
            id,
            floorId: activeFloor.id,
            xPosition: mouse.x,
            yPosition: mouse.y,
            orientation: windowPreviewOrientation === Directions.horizontal ? Directions.horizontal : Directions.vertical,
            roomId: currentRoom
          })))
        }

      default:
        return;
    };
  };

  return (
    <Row justifyContent={ Styles.JustifyContent.spaceBetween }>
      <ToolsPanel />
      <Stage
        canvasSize={ canvasSize }
        innerRef={ ref }
        onMouseMove={ handleOnMouseMove }
        onClick={ handleOnClick }
      >
        <Layer>
          <Grid canvasSize={ canvasSize }/>
        </Layer>
        <Layer>
          <ComponentMapping
            componentData={ rooms }
            renderComponent={ room => (
              <Room
                isDisabled={ room.floor !== activeFloor.id }
                isActive={ room.id === activeRoom.id }
                { ...room }
                rooms={ activeFloorRooms }
              />
            ) }
          />
        </Layer>
        <Layer>
          { selectedEntity === AppData.Rooms && (
            <RoomPreview
              xPosition={ mouse.x }
              yPosition={ mouse.y }
            />
          ) }
          { selectedEntity === AppData.Doors && (
            <DoorPreview
              xPosition={ mouse.x }
              yPosition={ mouse.y }
              orientation={ doorPreviewOrientation }
            />
          ) }
          { selectedEntity === AppData.Windows && (
            <WindowPreview
              xPosition={ mouse.x }
              yPosition={ mouse.y }
              orientation={ windowPreviewOrientation }
            />
          ) }
        </Layer>
      </Stage>
      <LayerPanel />
    </Row>
  );
};

export default Planner;
