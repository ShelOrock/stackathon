import React, { useEffect } from "react";

import Canvas from "../components/Canvas";
import LayerPanel from "../components/LayerPanel";
import Row from "../components/Row";
import Grid from "../components/Grid";
import ComponentMapping from "../components/ComponentMapping";
import Room from "../components/Room";
import Window from "../components/Window";
import Door from "../components/Door";

import { useAppDispatch, useAppSelector } from "../hooks";
import { AppData } from "../enums";
import { AppDataSelectors } from "../redux/selectors";
import { entityActions } from "../redux/actions";
import ToolsPanel from "../components/ToolsPanel";

const Planner = () => {

  const DEFAULT_FLOOR_NUMBER = 1;
  const DEFAULT_FLOOR = {
    id: DEFAULT_FLOOR_NUMBER,
    label: `Floor ${ DEFAULT_FLOOR_NUMBER }`,
    isHighlighted: false,
    isHidden: false
  };

  const dispatch = useAppDispatch();

  const canvasSize = useAppSelector(state => state.canvasSize);
  const gridIsShowing = useAppSelector(state => state.toggleElements.grid.isShowing);

  const activeFloor = useAppSelector(AppDataSelectors.selectActiveAppData(AppData.Floors, {
    attributes: [ "id" ]
  }));
  const rooms = useAppSelector(AppDataSelectors.selectAppData(AppData.Rooms));
  const doors = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors));
  const windows = useAppSelector(AppDataSelectors.selectAppData(AppData.Windows));

  useEffect(() => {
    dispatch(entityActions.addEntity(AppData.Floors, DEFAULT_FLOOR));
    dispatch(entityActions.setActiveId(AppData.Floors, DEFAULT_FLOOR_NUMBER));
  }, []);

  return (
    <Row>
      <ToolsPanel />
      <Canvas canvasSize={ canvasSize }>
        { gridIsShowing && <Grid canvasSize={ canvasSize } /> }
        <ComponentMapping
          componentData={ rooms }
          renderComponent={ room => (
            <Room
              isDisabled={ room.floor !== activeFloor.id }
              { ...room }
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
        />
      </Canvas>
      <LayerPanel />
    </Row>
  );
};

export default Planner;
