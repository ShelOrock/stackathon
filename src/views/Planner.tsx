import React, { useEffect, useRef, useState } from "react";
import { Layer } from "react-konva";
import * as turf from "@turf/turf";

import Stage from "../components/Canvas";
import LayerPanel from "../components/LayerPanel";
import Row from "../components/Row";
import Grid from "../components/Grid";
import ComponentMapping from "../components/ComponentMapping";
import Room from "../components/Room";

import { useAppDispatch, useAppSelector, useDetectRoomCollision } from "../hooks";
import { AppData, Directions, Styles } from "../enums";
import { AppDataSelectors } from "../redux/selectors";
import ToolsPanel from "../components/ToolsPanel";
import { entityActions, selectedEntityActions } from "../redux/actions";
import { utilities } from "../domain";
import { functions } from "../utilities";
import RoomPreview from "../components/RoomPreview.tsx/RoomPreview";
import DoorPreview from "../components/DoorPreview";
import WindowPreview from "../components/WindowPreview";
import Door from "../components/Door";
import Window from "../components/Window";
import Roof from "../components/Roof/Roof";
import RoofPreview from "../components/RoofPreview/RoofPreview";
import Konva from "konva";
import { Elements } from "../domain";
import { Feature, GeoJsonProperties, Geometry, MultiPolygon, Polygon } from "geojson";

interface DefaultEntityPropTypes {
  id: number;
  floorId: number;
  xPosition: number;
  yPosition: number;
  orientation?: Directions | null;
  roomId?: number | null;
};

interface CollidingObjectPropTypes {
  x: number;
  y: number;
  width: number;
  height: number;
}

const Planner = () => {

  const createDefaultEntity = (entity: AppData, {
    id,
    floorId,
    xPosition,
    yPosition,
    orientation,
    roomId
  }: DefaultEntityPropTypes) => {
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
  const DEFAULT_ROOF_DIMENSION = 100;
  const ROOM_OFFSET = 50;
  const ROOF_OFFSET = 50;
  const DOOR_X_OFFSET = 0;
  const DOOR_Y_OFFSET = 0;
  const DOOR_TOLERANCE = 12;
  const GRID_SNAP = 25;

  const dispatch = useAppDispatch();

  const stageRef = useRef<Konva.Stage | null>(null);

  const [ mouse, setMouse ] = useState({ x: 0, y: 0 });
  const [ lastMouse, setLastMouse ] = useState({ x: 0, y: 0 });
  const [ isRoomColliding, setIsRoomColliding ] = useState(false);
  const [ doorPreviewOrientation, setDoorPreviewOrientation ] = useState<Directions>(Directions.horizontal);
  const [ doorPositionIsValid, setDoorPositionIsValid ] = useState(false);
  const [ windowPreviewOrientation, setWindowPreviewOrientation ] = useState<Directions>(Directions.horizontal);
  const [ windowPositionIsValid, setWindowPositionIsValid ] = useState(false);
  const [ currentRoom, setCurrentRoom ] = useState(null);
  const [ roofPositionIsValid, setRoofPositionIsValid ] = useState(false);

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
  const roofs = useAppSelector(AppDataSelectors.selectAppData(AppData.Roofs));

  const floorFootprint = useAppSelector(AppDataSelectors.selectAppData(AppData.Rooms, {
    filters: { floor: activeFloor.id - 1 }
  }));

  const [ conflictingDoors, setConflictingDoors ] = useState([]);
  const [ conflictingWindows, setConflictingWindows ] = useState([]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if(e.key === "Escape") {
        dispatch(selectedEntityActions.resetSelectEntity());
      };
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const snapToGrid = (coordinate: number) => {
    return Math.round(coordinate / GRID_SNAP) * GRID_SNAP;
  };

  const detectCollision = (
    collidingObject: CollidingObjectPropTypes,
    stationaryObject: CollidingObjectPropTypes
  ) => (
    collidingObject.x + collidingObject.width > stationaryObject.x &&
    collidingObject.x < stationaryObject.x + stationaryObject.width && 
    collidingObject.y + collidingObject.height > stationaryObject.y &&
    collidingObject.y < stationaryObject.y + stationaryObject.height
  );

  const {
    detectLeftBoundary,
    detectRightBoundary,
    detectTopBoundary,
    detectBottomBoundary
  } = useDetectRoomCollision();

  const handleOnMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const stage = stageRef.current
    if(stage) {
      const pointerPosition = stage.getPointerPosition();
      
      if(pointerPosition) {
        const mousePositionX = Math.round(pointerPosition.x / GRID_SNAP) * GRID_SNAP;
        const mousePositionY = Math.round(pointerPosition.y / GRID_SNAP) * GRID_SNAP;

        setIsRoomColliding(false);

        if(selectedEntity === AppData.Rooms) {
          const canvas = {
            position: {
              x: 0,
              y: 0
            },
            size: {
              width: canvasSize,
              height: canvasSize
            }
          };

          const collidingObject = {
            position: {
              x: mousePositionX - ROOM_OFFSET,
              y: mousePositionY - ROOM_OFFSET,
            },
            size: {
              width: DEFAULT_ROOM_DIMENSION,
              height: DEFAULT_ROOM_DIMENSION
            }
          };

          if(!utilities.contains(canvas, collidingObject)) {
            setIsRoomColliding(true);
          };

          activeFloorRooms.forEach((room: Elements.Room) => {
            const stationaryObject = {
              position: {
                x: room.transform.position.x,
                y: room.transform.position.y,
              },
              size: {
                width: room.transform.scale.x,
                height: room.transform.scale.y
              }
            };

            if(utilities.intersects(collidingObject, stationaryObject)) {
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
          const canvas = {
            position: {
              x: 0,
              y: 0
            },
            size: {
              width: canvasSize,
              height: canvasSize
            }
          };

          const collidingObject = {
            position: {
              x: mousePositionX - DOOR_X_OFFSET,
              y: mousePositionY - DOOR_Y_OFFSET,
            },
            size: {
              width: DEFAULT_ROOM_DIMENSION,
              height: DEFAULT_ROOM_DIMENSION
            }
          };

          if(utilities.contains(canvas, collidingObject)) {
            setMouse({
              x: lastMouse.x,
              y: lastMouse.y
            });
          };

          setDoorPositionIsValid(false);
          setWindowPositionIsValid(false);

          activeFloorRooms.forEach((room: any) => { // Fix Typing
            const stationaryObject = {
              x: room.xPosition,
              y: room.yPosition,
              width: room.width,
              height: room.height
            };

            // if(detectLeftBoundary(collidingObject, stationaryObject, DOOR_TOLERANCE) || detectRightBoundary(collidingObject, stationaryObject, DOOR_TOLERANCE)) {
            //   setDoorPreviewOrientation(Directions.vertical);
            //   setWindowPreviewOrientation(Directions.vertical);
            //   setCurrentRoom(room.id);
            //   setDoorPositionIsValid(true);
            //   setWindowPositionIsValid(true);
            // };
            
            // if(detectTopBoundary(collidingObject, stationaryObject, DOOR_TOLERANCE) || detectBottomBoundary(collidingObject, stationaryObject, DOOR_TOLERANCE)) {
            //   setDoorPreviewOrientation(Directions.horizontal);
            //   setWindowPreviewOrientation(Directions.horizontal);
            //   setCurrentRoom(room.id);
            //   setDoorPositionIsValid(true);
            //   setWindowPositionIsValid(true);
            // };
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

        if(selectedEntity === AppData.Roofs) {
          const collidingObject = {
            x: mousePositionX,
            y: mousePositionY,
            width: DEFAULT_ROOF_DIMENSION,
            height: DEFAULT_ROOM_DIMENSION
          };

          const collidingPolygon = [
            [ collidingObject.x, collidingObject.y ],
            [ collidingObject.x + DEFAULT_ROOF_DIMENSION, collidingObject.y ],
            [ collidingObject.x + DEFAULT_ROOF_DIMENSION, collidingObject.y + DEFAULT_ROOF_DIMENSION ],
            [ collidingObject.x, collidingObject.y + DEFAULT_ROOF_DIMENSION ],
            [ collidingObject.x, collidingObject.y ]
          ];

          const floorPlanVertices = getFloorPlanVertices(floorFootprint);
          const roofVertices = turf.polygon([ collidingPolygon ]);
          
          if(floorPlanVertices && roofVertices) {
            if(checkRoofIsValid(roofVertices, floorPlanVertices)) {
              setRoofPositionIsValid(true)
            } else {
              setRoofPositionIsValid(false);
            }
          }


          setMouse({
            x: mousePositionX,
            y: mousePositionY
          });
        };
      };
    };
  };

  const handleOnClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    let id;

    switch(selectedEntity) {
      case AppData.Rooms:
        id = functions.findMissingId(rooms);

        const entity = createDefaultEntity(selectedEntity, {
          id,
          floorId: activeFloor.id,
          xPosition: mouse.x - ROOM_OFFSET,
          yPosition: mouse.y - ROOM_OFFSET,
          orientation: null,
          roomId: null
        });

        if(entity) {
          dispatch(entityActions.addEntity(selectedEntity, entity));
          dispatch(entityActions.setActiveId(selectedEntity, entity.id));
        }

        return;

      case AppData.Doors:
        if(currentRoom && doorPositionIsValid) {
          id = functions.findMissingId(doors);
          
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
          id = functions.findMissingId(windows);

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

  const getFloorPlanVertices = (floorplan: Elements.Room[]) => {
    const polygons = floorplan.map((room: Elements.Room) => {
      const polygon = [
        [ room.transform.position.x, room.transform.position.y ],
        [ room.transform.position.x + room.transform.scale.x, room.transform.position.y ],
        [ room.transform.position.x + room.transform.scale.x, room.transform.position.y + room.transform.scale.y ],
        [ room.transform.position.x, room.transform.position.y + room.transform.scale.y ],
        [ room.transform.position.x, room.transform.position.y ],
      ];
      return turf.polygon([ polygon ]);
    });

    const allPolygons = turf.union(turf.featureCollection(polygons));
    return allPolygons;
  };

  const checkRoofIsValid = (collidingPolygon: Feature<Geometry>, stationaryPolygon: Feature<Polygon |MultiPolygon, GeoJsonProperties>) => {
    const isContained = turf.booleanContains(stationaryPolygon, collidingPolygon);

    if(!isContained) {
      return false;
    };

    return true;
  };

  useEffect(() => {    
    const handleOutsideClick = (e: MouseEvent) => {
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

      if(stageRef.current) {
        const pointerPosition = stageRef.current.getPointerPosition();

        if(!pointerPosition) {
          return;
        };
      
        const clickedShape = stageRef.current.getIntersection(pointerPosition);

        if(!clickedShape) {
          dispatch(entityActions.resetActiveId(AppData.Rooms));
        };
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
                selectedEntity={ selectedEntity }
              />
            ) }
          />
        </Layer>
        <Layer>
          <ComponentMapping
            componentData={ doors }
            renderComponent={ door => (
              <Door
                isDisabled={ door.floor !== activeFloor.id }
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
                isDisabled={ window.floor !== activeFloor.id }
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
          <ComponentMapping
            componentData={ roofs }
            renderComponent={ roof => {
              return (
                <Roof
                  { ...roof }
                />
              )
            } }
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
          { selectedEntity === AppData.Roofs && (
            <RoofPreview
              xPosition={ mouse.x }
              yPosition={ mouse.y }
              orientation={ windowPreviewOrientation }
              isValid={ roofPositionIsValid }
            />
          ) }
        </Layer>
      </Stage>
      <LayerPanel />
    </Row>
  );
};

export default Planner;
