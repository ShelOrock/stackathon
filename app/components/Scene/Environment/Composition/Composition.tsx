import React from "react";

import Room from "./Room";
import Window from "./Window";

import { useAppSelector } from "../../../../hooks";
import { AppDataSelectors } from "../../../../redux/selectors";
import { AppData } from "../../../../enums";
import ComponentMapping from "../../../ComponentMapping";
import DoorMesh from "./Door";

const Composition = () => {

  const SCALE_FACTOR = 10;
  const TRANSLATION_CORRECTION = 25;

  const rooms = useAppSelector(AppDataSelectors.selectAppData(AppData.Rooms));
  const doors = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors));
  const windows = useAppSelector(AppDataSelectors.selectAppData(AppData.Windows));
  
  const translateCoordinatesTo3D = (position: number, dimension: number): number => {
    return (position + dimension / 2) / SCALE_FACTOR - TRANSLATION_CORRECTION;
  };

  return (
    <> 
      <ComponentMapping
        componentData={ rooms }
        renderComponent={ room => (
          <Room 
            width={ room.width / SCALE_FACTOR }
            height={ 10 }
            depth={ room.height / SCALE_FACTOR }
            xPosition={ translateCoordinatesTo3D(room.xPosition, room.width) - 5 }
            yPosition={ 10 * room.floor - 5 }
            zPosition={ translateCoordinatesTo3D(room.yPosition, room.height) - 5 }
            label={ room.label }
          />
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

export default Composition;
