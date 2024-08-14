import React from "react";

import Canvas from "../components/Canvas";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import Row from "../components/Row";
import Grid from "../components/Grid";
import Rooms from "../components/Rooms";
import Windows from "../components/Windows";
import { useAppSelector, useIndexData } from "../hooks";
import { ComponentMapping } from "../components/ComponentMapping";
import { AppData } from "../enums";
import Door from "../components/Door";

const Planner = () => {

  const canvasSize = useAppSelector(state => state.canvasSize);
  const gridIsShowing = useAppSelector(state => state.toggleElements.grid.isShowing);

  const { doors = [], currentFloor } = useAppSelector(state => state);
  const { indexedData: indexedDoors } = useIndexData(doors, AppData.DOOR);

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
        <Windows />
      </Canvas>
      <RightPanel />
    </Row>
  );
};

export default Planner;
