import React from "react";

import Canvas from "../components/Canvas";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import Row from "../components/Row";
import Grid from "../components/Grid";
import ComponentMapping from "../components/ComponentMapping";
import Rooms from "../components/Rooms";
import Window from "../components/Window";
import Door from "../components/Door";

import { useAppSelector, useIndexData } from "../hooks";
import { AppData } from "../enums";

const Planner = () => {

  const canvasSize = useAppSelector(state => state.canvasSize);
  const gridIsShowing = useAppSelector(state => state.toggleElements.grid.isShowing);

  const { doors = [], windows = [], currentFloor } = useAppSelector(state => state);
  const { indexedData: indexedDoors } = useIndexData(doors, AppData.DOOR);
  const { indexedData: indexedWindows } = useIndexData(windows, AppData.WINDOW);

  return (
    <Row>
      <LeftPanel />
      <Canvas canvasSize={ canvasSize }>
        { gridIsShowing && <Grid canvasSize={ canvasSize } /> }
        <Rooms />
        <ComponentMapping
          componentData={ indexedDoors }
          renderComponent={ ({ door }) => (
            <Door
              isDisabled={ door.floor !== currentFloor.index }
              { ...door }
            />
          ) }
        />
        <ComponentMapping
          componentData={ indexedWindows }
          renderComponent={ ({ window }) => (
            <Window
              isDisabled={ window.floor !== currentFloor.index }
              { ...window }
            />
          ) }
        />
      </Canvas>
      <RightPanel />
    </Row>
  );
};

export default Planner;
