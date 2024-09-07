import React, { useEffect, useRef, useState } from "react";
import { Group, Layer, Line, Rect, Text } from "react-konva";

import Stage from "../components/Canvas";
import LayerPanel from "../components/LayerPanel";
import Row from "../components/Row";
import Grid from "../components/Grid";
import ComponentMapping from "../components/ComponentMapping";
import Room from "../components/Room";
import Window from "../components/Window";
import Door from "../components/Door";

import { useAppDispatch, useAppSelector } from "../hooks";
import { AppData, Styles } from "../enums";
import { AppDataSelectors } from "../redux/selectors";
import ToolsPanel from "../components/ToolsPanel";
import { entityActions, selectedEntityActions } from "../redux/actions";
import * as utilities from "../utilities";
import RoomPreview from "../components/RoomPreview.tsx/RoomPreview";
import { Html } from "react-konva-utils";
import DoorPreview from "../components/DoorPreview";

const Planner = () => {

  const createDefaultEntity = (entity, {
    id,
    floorId,
    xPosition,
    yPosition,
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
          width: 25,
          height: 6,
          xPosition,
          yPosition,
          isHighlighted: false,
          isLocked: false,
          isHidden: false,
          tag: Styles.Colors.blue
        }
      
      default:
        console.log("HIT")
    };
  };

  const CANVAS_MINIMUM_SIZE = 0;
  const MOUSE_OFFSET = 50;
  const GRID_SNAP = 25;

  const dispatch = useAppDispatch();

  const [ mouse, setMouse ] = useState({ x: 0, y: 0 });
  const [ lastMouse, setLastMouse ] = useState({ x: 0, y: 0 });

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

  const detectCanvasBoundaries = (collidingObject) => (
    collidingObject.x < CANVAS_MINIMUM_SIZE ||
    collidingObject.x > canvasSize - 100 ||
    collidingObject.y < CANVAS_MINIMUM_SIZE ||
    collidingObject.y > canvasSize - 100
  );

  const handleOnMouseMove = e => {
    const stage = e.target.getStage();
    const mousePositionX = Math.round(stage.getPointerPosition().x / GRID_SNAP) * GRID_SNAP;
    const mousePositionY = Math.round(stage.getPointerPosition().y / GRID_SNAP) * GRID_SNAP;

    setMouse({
      x: mousePositionX,
      y: mousePositionY
    });
  };

  const handleOnClick = e => {
    let id;

    switch(selectedEntity) {
      case AppData.Rooms:
        id = utilities.functions.findMissingId(rooms);

        dispatch(entityActions.addEntity(selectedEntity, createDefaultEntity(selectedEntity, {
          id,
          floorId: activeFloor.id,
          xPosition: mouse.x - MOUSE_OFFSET,
          yPosition: mouse.y - MOUSE_OFFSET
        })));
      case AppData.Doors:
        id = utilities.functions.findMissingId(doors);
        
        dispatch(entityActions.addEntity(selectedEntity, createDefaultEntity(selectedEntity, {
          id,
          floorId: activeFloor.id,
          xPosition: mouse.x,
          yPosition: mouse.y
        })));
      default:
        id = 1;
    };

    if(!e.evt.shiftKey) {
      dispatch(selectedEntityActions.resetSelectEntity());
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
          {
            selectedEntity === AppData.Rooms ? (
              <RoomPreview
                xPosition={ mouse.x }
                yPosition={ mouse.y }
              />
            ) : selectedEntity === AppData.Doors ? (
              <DoorPreview
                xPosition={ mouse.x }
                yPosition={ mouse.y }
              />
            ) : null
          }
          <ComponentMapping
            componentData={ rooms }
            renderComponent={ room => (
              <Room
                isDisabled={ room.floor !== activeFloor.id }
                { ...room }
                rooms={ activeFloorRooms }
              />
            ) }
          />
          <ComponentMapping
            componentData={ doors }
            renderComponent={ door => (
              <Door
                isDisabled={ door.floor !== activeFloor.id }
                { ...door }
              />
            ) }
          />
        </Layer>
      </Stage>
      {/* <Canvas canvasSize={ canvasSize }
        innerRef={ canvasRef }
      /> */}
        {/* { gridIsShowing && <Grid canvasSize={ canvasSize } /> }
        <ComponentMapping
          componentData={ rooms }
          renderComponent={ room => (
            <Room
              isDisabled={ room.floor !== activeFloor.id }
              { ...room }
              rooms={ rooms }
            />
          ) }
        />
        <ComponentMapping
          componentData={ doors }
          renderComponent={ door => (
            <Door
              isDisabled={ door.floor !== activeFloor.id }
              { ...door }
            />
          ) }
        />
        <ComponentMapping
          componentData={ windows }
          renderComponent={ window => (
            <Window
              isDisabled={ window.floor !== activeFloor.id }
              { ...window }
            />
          ) }
        /> */}
      <LayerPanel />
    </Row>
  );
};

export default Planner;
