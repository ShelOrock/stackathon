import React from "react";
import { useAppDispatch } from "../../../hooks";

import { AppData } from "../../../enums";
import Row from "../../Row";
import { setActiveId, updateEntity } from "../../../redux/entities/actions";
import { ComponentPropTypes } from "./types";
import Button from "../../Button";

const FloorLayer: React.FC<ComponentPropTypes> = ({
  id,
  isHidden = true,
  activeFloorId,
  handleDeleteFloor
}) => {

  const dispatch = useAppDispatch();

  const handleSetActiveFloor = () => {
    dispatch(setActiveId(AppData.Floors, id));
  };

  const handleToggleFloorVisibility = () => {
    dispatch(updateEntity(AppData.Floors, { id, isHidden: !isHidden }));
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
  );
};

export default FloorLayer;
