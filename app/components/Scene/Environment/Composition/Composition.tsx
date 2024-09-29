import React from "react";

import Window from "./Window";

import { useAppSelector } from "../../../../hooks";
import { AppDataSelectors } from "../../../../redux/selectors";
import { AppData, Directions } from "../../../../enums";
import ComponentMapping from "../../../ComponentMapping";
import DoorMesh from "../../../DoorMesh";
import RoomMesh from "../../../RoomMesh";
import WindowMesh from "../../../WindowMesh";

const Composition = () => {

  const SCALE_FACTOR = 10;
  const TRANSLATION_CORRECTION = 25;

  const ROTATION_0_DEGREES = 0;

  const rooms = useAppSelector(AppDataSelectors.selectAppData(AppData.Rooms));
  const doors = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors));
  const windows = useAppSelector(AppDataSelectors.selectAppData(AppData.Windows));
  
  // TODO: Combine these into a reusable function
  const translateCoordinatesTo3D = (position: number, dimension: number): number => {
    return (position + dimension / 2) / SCALE_FACTOR - TRANSLATION_CORRECTION;
  };

  const translateXCoordinatesTo3D = (position, dimension, orientation): number => {
    if(orientation == Directions.vertical) {
     return ((position - dimension / 2) + dimension / 2) / SCALE_FACTOR - TRANSLATION_CORRECTION - 5;
    };
    
    if(orientation == Directions.horizontal) {
     return (position + dimension / 2) / SCALE_FACTOR - TRANSLATION_CORRECTION - 5;
    };
  };

  const translateYCoordinatesTo3D = (position, dimension, orientation): number => {
    if(orientation == Directions.vertical) {
     return ((position + dimension / 2) + dimension / 2) / SCALE_FACTOR - TRANSLATION_CORRECTION - 5;
    };
    if(orientation == Directions.horizontal) {
      return ((position - dimension / 2) + dimension / 2) / SCALE_FACTOR - TRANSLATION_CORRECTION - 5;
    };
  };

  return (
    <> 
      <ComponentMapping
        componentData={ rooms }
        renderComponent={ room => (
          <RoomMesh
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
        renderComponent={ door => {
          return (
            <DoorMesh 
              width={ door.orientation === Directions.vertical ? door.height / SCALE_FACTOR : door.width / SCALE_FACTOR }
              height={ 6 }
              depth={ door.orientation === Directions.vertical ? door.width / SCALE_FACTOR : door.height / SCALE_FACTOR }
              xPosition={ translateXCoordinatesTo3D(door.xPosition, door.width, door.orientation) }
              yPosition={ 10 * door.floor - 7 }
              zPosition={ translateYCoordinatesTo3D(door.yPosition, door.width, door.orientation) }
              xRotation={ ROTATION_0_DEGREES }
              yRotation={ ROTATION_0_DEGREES }
              zRotation={ ROTATION_0_DEGREES }
            />
          )
         } }
      />
      <ComponentMapping
        componentData={ windows }
        renderComponent={ window => (
          <WindowMesh 
            width={ window.orientation === Directions.vertical ? window.height / SCALE_FACTOR : window.width / SCALE_FACTOR }
            height={ 3 }
            depth={ window.orientation === Directions.vertical ? window.width / SCALE_FACTOR : window.height / SCALE_FACTOR }
            xPosition={ translateXCoordinatesTo3D(window.xPosition, window.width, window.orientation) }
            yPosition={ 10 * window.floor - 5 }
            zPosition={ translateYCoordinatesTo3D(window.yPosition, window.width, window.orientation) }
            xRotation={ ROTATION_0_DEGREES }
            yRotation={ ROTATION_0_DEGREES }
            zRotation={ ROTATION_0_DEGREES }
          />
        )}
      />
    </>
  );
};

export default Composition;
