import React, { useEffect, useRef, useState } from "react";
import { Layer } from "react-konva";

import Stage from "../components/Canvas";
import LayerPanel from "../components/LayerPanel";
import Row from "../components/Row";
import Grid from "../components/Grid";
import ComponentMapping from "../components/ComponentMapping";
import Room from "../components/Room";

import { useAppDispatch, useAppSelector, useDetectCanvasCollision, useDetectRoomCollision } from "../hooks";
import { AppData, Directions, Styles } from "../enums";
import { AppDataSelectors } from "../redux/selectors";
import ToolsPanel from "../components/ToolsPanel";
import { entityActions, selectedEntityActions } from "../redux/actions";
import * as utilities from "../utilities";
import RoomPreview from "../components/RoomPreview.tsx/RoomPreview";
import DoorPreview from "../components/DoorPreview";
import WindowPreview from "../components/WindowPreview";
import Door from "../components/Door";
import Window from "../components/Window";

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
          height: 4,
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

  const DEFAULT_ROOM_DIMENSION = 100;
  const ROOM_OFFSET = 50;
  const DOOR_X_OFFSET = 0;
  const DOOR_Y_OFFSET = 0;
  const DOOR_TOLERANCE = 12;
  const GRID_SNAP = 25;

  const dispatch = useAppDispatch();

  const stageRef = useRef(null);

  const [ mouse, setMouse ] = useState({ x: 0, y: 0 });
  const [ lastMouse, setLastMouse ] = useState({ x: 0, y: 0 });
  const [ isRoomColliding, setIsRoomColliding ] = useState(false);
  const [ doorPreviewOrientation, setDoorPreviewOrientation ] = useState<Directions>(Directions.horizontal);
  const [ doorPositionIsValid, setDoorPositionIsValid ] = useState(false);
  const [ windowPreviewOrientation, setWindowPreviewOrientation ] = useState<Directions>(Directions.horizontal);
  const [ windowPositionIsValid, setWindowPositionIsValid ] = useState(false);
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

  const [ conflictingDoors, setConflictingDoors ] = useState([]);
  const [ conflictingWindows, setConflictingWindows ] = useState([]);

  useEffect(() => {
    const handleEscape = e => {
      if(e.key === "Escape") {
        dispatch(selectedEntityActions.resetSelectEntity());
      };
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const detectCollision = (
    collidingObject,
    stationaryObject
  ) => (
    collidingObject.x + collidingObject.width > stationaryObject.x &&
    collidingObject.x < stationaryObject.x + stationaryObject.width && 
    collidingObject.y + collidingObject.height > stationaryObject.y &&
    collidingObject.y < stationaryObject.y + stationaryObject.height
  );

  const { detectCanvasCollision } = useDetectCanvasCollision();

  const {
    detectLeftBoundary,
    detectRightBoundary,
    detectTopBoundary,
    detectBottomBoundary
  } = useDetectRoomCollision();

  const handleOnMouseMove = e => {
    const stage = e.target.getStage();
    const mousePositionX = Math.round(stage.getPointerPosition().x / GRID_SNAP) * GRID_SNAP;
    const mousePositionY = Math.round(stage.getPointerPosition().y / GRID_SNAP) * GRID_SNAP;

    setIsRoomColliding(false);

    if(selectedEntity === AppData.Rooms) {
      const collidingObject = {
        x: mousePositionX - ROOM_OFFSET,
        y: mousePositionY - ROOM_OFFSET,
        width: DEFAULT_ROOM_DIMENSION,
        height: DEFAULT_ROOM_DIMENSION
      };

      if(detectCanvasCollision(canvasSize, {
        xPosition: collidingObject.x,
        yPosition: collidingObject.y,
        xOffset: DEFAULT_ROOM_DIMENSION,
        yOffset: DEFAULT_ROOM_DIMENSION
      })) {
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
        setMouse({
          x: lastMouse.x,
          y: lastMouse.y
        });
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

      if(detectCanvasCollision(canvasSize, {
        xPosition: collidingObject.x,
        yPosition: collidingObject.y,
        xOffset: 25,
        yOffset: 6
      })) {
        setMouse({
          x: lastMouse.x,
          y: lastMouse.y
        });
      };

      setDoorPositionIsValid(false);
      setWindowPositionIsValid(false);

      activeFloorRooms.forEach(room => {
        const stationaryObject = {
          x: room.xPosition,
          y: room.yPosition,
          width: room.width,
          height: room.height
        };

        if(detectLeftBoundary(collidingObject, stationaryObject, DOOR_TOLERANCE) || detectRightBoundary(collidingObject, stationaryObject, DOOR_TOLERANCE)) {
          setDoorPreviewOrientation(Directions.vertical);
          setWindowPreviewOrientation(Directions.vertical);
          setCurrentRoom(room.id);
          setDoorPositionIsValid(true);
          setWindowPositionIsValid(true);
        };
        
        if(detectTopBoundary(collidingObject, stationaryObject, DOOR_TOLERANCE) || detectBottomBoundary(collidingObject, stationaryObject, DOOR_TOLERANCE)) {
          setDoorPreviewOrientation(Directions.horizontal);
          setWindowPreviewOrientation(Directions.horizontal);
          setCurrentRoom(room.id);
          setDoorPositionIsValid(true);
          setWindowPositionIsValid(true);
        };
      });

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

        return;

      case AppData.Doors:
        if(currentRoom && doorPositionIsValid) {
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
        if(currentRoom && windowPositionIsValid) {
          id = utilities.functions.findMissingId(windows);

          dispatch(entityActions.addEntity(selectedEntity, createDefaultEntity(selectedEntity, {
            id,
            floorId: activeFloor.id,
            xPosition: mouse.x,
            yPosition: mouse.y,
            orientation: windowPreviewOrientation === Directions.horizontal ? Directions.horizontal : Directions.vertical,
            roomId: currentRoom
          })));

          if(!e.evt.shiftKey) {
            dispatch(selectedEntityActions.resetSelectEntity());
          };
        };

      default:
        return;
    };
  };

  useEffect(() => {    
    const handleOutsideClick = e => {
      if(selectedEntity) {
        if(!e.shiftKey) {
          dispatch(selectedEntityActions.resetSelectEntity());
        }
      };

      if(!activeRoom.id) {
        return;
      };
  
      if(!stageRef.current) {
        return;
      };

      const pointerPosition = stageRef.current.getPointerPosition();

      if(!pointerPosition) {
        return;
      };
      
      const clickedShape = stageRef.current.getIntersection(pointerPosition);

      if(!clickedShape) {
        dispatch(entityActions.resetActiveId(AppData.Rooms));
      };
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [activeRoom.id]);

  return (
    <Row justifyContent={ Styles.JustifyContent.spaceBetween }>
      <ToolsPanel />
      <Stage
        canvasSize={ canvasSize }
        innerRef={ stageRef }
        onMouseMove={ handleOnMouseMove }
        onClick={ handleOnClick }
      >
        { gridIsShowing && (
          <Layer>
            <Grid canvasSize={ canvasSize }/>
          </Layer>
        ) }
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
          <ComponentMapping
            componentData={ doors }
            renderComponent={ door => (
              <Door
                // isDisabled={ door.floor !== activeFloor.id }
                xPosition={ door.xPosition }
                yPosition={ door.yPosition }
                rooms={ rooms }
                activeRoom={ activeRoom.id }
                { ...door }
              />
            ) }
          />
        </Layer>
        <Layer>
          <ComponentMapping
            componentData={ windows }
            renderComponent={ window => (
              <Window
                xPosition={ window.xPosition }
                yPosition={ window.yPosition }
                rooms={ rooms }
                activeRoom={ activeRoom.id }
                { ...window }
              />
            )}
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
              isValid={ doorPositionIsValid }
            />
          ) }
          { selectedEntity === AppData.Windows && (
            <WindowPreview
              xPosition={ mouse.x }
              yPosition={ mouse.y }
              orientation={ windowPreviewOrientation }
              isValid={ windowPositionIsValid }
            />
          ) }
        </Layer>
      </Stage>
      <LayerPanel />
    </Row>
  );
};

export default Planner;
