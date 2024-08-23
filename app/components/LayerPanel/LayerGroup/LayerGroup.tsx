import React from "react";

import FloorLayer from "../FloorLayer";
import Column from "../../Column";
import ComponentMapping from "../../ComponentMapping";
import EntityLayer from "../EntityLayer";
import { AppData } from "../../../enums";
import { useAppSelector } from "../../../hooks";
import { AppDataSelectors } from "../../../redux/selectors";
import { ComponentPropTypes } from "./types";

const LayerGroup: React.FC<ComponentPropTypes> = ({
  id,
  isHidden,
  activeFloorId
}) => {

  const rooms = useAppSelector(AppDataSelectors.selectAppData(AppData.Rooms, {
    filters: { floor: id }
  }));

  const doors = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors, {
    filters: { floor: id }
  }));

  const windows = useAppSelector(AppDataSelectors.selectAppData(AppData.Windows, {
    filters: { floor: id }
  }));

  return (
    <Column>
      <FloorLayer
        id={ id }
        isHidden={ isHidden }
        activeFloorId={ activeFloorId }
      />
      { !isHidden && (
        <Column>
          <ComponentMapping
            componentData={ rooms }
            renderComponent={ room => id === room.floor && (
              <EntityLayer
                appDataType={ AppData.Rooms }
                { ...room }
              />
            ) }
          />
          <ComponentMapping
            componentData={ doors }
            renderComponent={ door => id === door.floor && (
              <EntityLayer
                appDataType={ AppData.Doors }
                { ...door }
              />
            ) }
          />
          <ComponentMapping
            componentData={ windows }
            renderComponent={ window => id === window.floor && (
              <EntityLayer
                appDataType={ AppData.Windows }
                { ...window }
              />
            ) }
          />
        </Column>
      ) }
    </Column>
  )
};

export default LayerGroup;
