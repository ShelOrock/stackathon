import React, { useEffect, useRef } from "react";
import { Layer, Line, Rect, Text } from "react-konva";

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

  // const canvasRef = useRef(null);

  // useEffect(() => {
  //   const context = canvasRef.current.getContext("2d");
  //   context.fillStyle = "#000";
  //   context.fillRect(5, 5, 100, 100)
  // }, []);

  const canvasSize = useAppSelector(state => state.canvasSize);
  const gridIsShowing = useAppSelector(state => state.toggleElements.grid.isShowing);

  const activeFloor = useAppSelector(AppDataSelectors.selectActiveAppData(AppData.Floors, {
    attributes: [ "id" ]
  }));
  const rooms = useAppSelector(AppDataSelectors.selectAppData(AppData.Rooms));
  const doors = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors));
  const windows = useAppSelector(AppDataSelectors.selectAppData(AppData.Windows));

  return (
    <Row justifyContent={ Styles.JustifyContent.spaceBetween }>
      <ToolsPanel />
      <Stage canvasSize={ canvasSize }>
        <Layer>
          <Grid canvasSize={ canvasSize }/>
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
