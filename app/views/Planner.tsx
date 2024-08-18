import React from "react";

import Canvas from "../components/Canvas";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import Row from "../components/Row";
import Grid from "../components/Grid";
import ComponentMapping from "../components/ComponentMapping";
import Room from "../components/Room";
import Window from "../components/Window";
import Door from "../components/Door";

import { useAppSelector, useIndexData } from "../hooks";
import { AppData } from "../enums";
import { AppDataSelectors } from "../redux/selectors";

const Planner = () => {

  const canvasSize = useAppSelector(state => state.canvasSize);
  const gridIsShowing = useAppSelector(state => state.toggleElements.grid.isShowing);

  const doors = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors));
  const { rooms = [], windows = [], currentFloor } = useAppSelector(state => state);
  const { indexedData: indexedRooms } = useIndexData(rooms, AppData.Rooms);
  const { indexedData: indexedWindows } = useIndexData(windows, AppData.Windows);

  return (
    <Row>
      <LeftPanel />
      <Canvas canvasSize={ canvasSize }>
        { gridIsShowing && <Grid canvasSize={ canvasSize } /> }
        <ComponentMapping
          componentData={ indexedRooms }
          renderComponent={ ({ room }) => (
            <Room
              isDisabled={ room.floor !== currentFloor.index }
              { ...room }
            />
          ) }
        />
        <ComponentMapping
          componentData={ doors }
          renderComponent={ (door) => (
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
