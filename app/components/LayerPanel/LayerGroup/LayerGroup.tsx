import React from "react";

import FloorLayer from "../FloorLayer";
import Column from "../../Column";
import ComponentMapping from "../../ComponentMapping";
import EntityLayer from "../EntityLayer";
import { AppData, Styles } from "../../../enums";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { AppDataSelectors } from "../../../redux/selectors";
import { ComponentPropTypes } from "./types";
import { entityActions } from "../../../redux/actions";
import RoomLayer from "../RoomLayer";

const LayerGroup: React.FC<ComponentPropTypes> = ({
  id,
  isHidden,
  activeFloorId
}) => {

  const dispatch = useAppDispatch();

  const rooms = useAppSelector(AppDataSelectors.selectAppData(AppData.Rooms, {
    filters: { floor: id }
  }));

  const doors = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors, {
    filters: { floor: id }
  }));

  const windows = useAppSelector(AppDataSelectors.selectAppData(AppData.Windows, {
    filters: { floor: id }
  }));

  const handleDeleteFloor = () => {
    dispatch(entityActions.deleteEntity(AppData.Floors, id));
    dispatch(entityActions.resetActiveId(AppData.Floors));
    rooms.forEach(room => dispatch(entityActions.deleteEntity(AppData.Rooms, room.id)));
    doors.forEach(door => dispatch(entityActions.deleteEntity(AppData.Doors, door.id)));
    windows.forEach(window => dispatch(entityActions.deleteEntity(AppData.Windows, window.id)));
  };

  return (
    <Column>
      <FloorLayer
        id={ id }
        isHidden={ isHidden }
        activeFloorId={ activeFloorId }
        handleDeleteFloor={ handleDeleteFloor }
      />
      { !isHidden && (
        <Column $mt={ Styles.Spacings.xs } $ml={ Styles.Spacings.sm }>
          <ComponentMapping
            componentData={ rooms }
            renderComponent={ room => id === room.floor && (
              <RoomLayer
                appDataType={ AppData.Rooms }
                { ...room }
              />
            ) }
          />
        </Column>
      ) }
    </Column>
  )
};

export default LayerGroup;
