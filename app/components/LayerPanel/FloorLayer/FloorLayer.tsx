import React from "react";
import { useAppDispatch } from "../../../hooks";

import { AppData } from "../../../enums";
import Row from "../../Row";
import { deleteEntity, resetActiveId, setActiveId, updateEntity } from "../../../redux/entities/actions";
import { ComponentPropTypes } from "./types";
import Button from "../../Button";

const FloorLayer: React.FC<ComponentPropTypes> = ({
  id,
  isHidden = true,
  activeFloorId
}) => {

  const dispatch = useAppDispatch();

  const handleSetActiveFloor = () => {
    dispatch(setActiveId(AppData.Floors, id));
  };

  const handleToggleFloorVisibility = () => {
    dispatch(updateEntity(AppData.Floors, { id, isHidden: !isHidden }));
  };

  const handleDeleteFloor = () => {
    dispatch(deleteEntity(AppData.Floors, id));
    dispatch(resetActiveId(AppData.Floors));
    // roomsToDelete.forEach(room => dispatch(deleteEntity(AppData.Rooms, room.id)));
    // doorsToDelete.forEach(door => dispatch(deleteEntity(AppData.Doors, door.id)));
    // windowsToDelete.forEach(window => dispatch(deleteEntity(AppData.Windows, window.id)));
  };

  return (
    <Row>
      <Button
        onClick={ handleSetActiveFloor }
      >Floor { id }</Button>
      <Button
        onClick={ handleToggleFloorVisibility }
      >{ !isHidden ? <>&#9660;</> : <>&#9654;</> }</Button>
      <Button
        onClick={ handleDeleteFloor }
      >X</Button>
    </Row>
  )
};

export default FloorLayer;
