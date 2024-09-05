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

import { useAppSelector } from "../hooks";
import { AppData, Styles } from "../enums";
import { AppDataSelectors } from "../redux/selectors";
import ToolsPanel from "../components/ToolsPanel";

const Planner = () => {

  const [ mouse, setMouse ] = useState({ x: 0, y: 0 });

  const canvasSize = useAppSelector(state => state.canvasSize);
  const gridIsShowing = useAppSelector(state => state.toggleElements.grid.isShowing);

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

  const onMouseMove = e => {
    if(e.target.getPointerPosition()) { 
      setMouse({
        x: Math.round(e.target.getPointerPosition().x / 25) * 25,
        y: Math.round(e.target.getPointerPosition().y / 25) * 25
      });
    };
  };

  return (
    <Row justifyContent={ Styles.JustifyContent.spaceBetween }>
      <ToolsPanel />
      <Stage
        canvasSize={ canvasSize }
        innerRef={ ref }
        onMouseMove={ onMouseMove }
      >
        <Layer>
          <Grid canvasSize={ canvasSize }/>
          <Group>
          <Room
            id={ 1 }
            label="test"
            width={ 100 }
            height={ 100 }
            xPosition={ mouse.x }
            yPosition={ mouse.y }
            tag={ Styles.Colors.blue }
            rooms={ [] }
          />
          </Group>
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
