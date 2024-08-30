import React from "react";

import Room from "./Room";
import Window from "./Window";

import { useAppSelector } from "../../../../hooks";
import { AppDataSelectors } from "../../../../redux/selectors";
import { AppData } from "../../../../enums";
import ComponentMapping from "../../../ComponentMapping";
import DoorMesh from "./Door";

export default () => {

  const rooms = useAppSelector(AppDataSelectors.selectAppData(AppData.Rooms));
  const doors = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors));
  const windows = useAppSelector(AppDataSelectors.selectAppData(AppData.Windows));
  
  return (
    <> 
      <ComponentMapping
        componentData={ rooms }
        renderComponent={ room => (
          <Room { ...room } />
        ) }
      />
      <ComponentMapping
        componentData={ doors }
        renderComponent={ door => (
          <DoorMesh { ...door } />
        ) }
      />
      <ComponentMapping
        componentData={ windows }
        renderComponent={ window => (
          <Window { ...window } />
        )}
      />
    </>
  );
};