import React from "react";
import { useAppDispatch } from "../../../hooks";

import { AppData } from "../../../enums";
import Row from "../../Row";
import { entityActions } from "../../../redux/actions";
import { ComponentPropTypes } from "./types";
import Button from "../../Button";
import { SpacingPropTypes } from "../../../types/styles";

const FloorLayer: React.FC<ComponentPropTypes> = ({
  id,
  isHidden = true,
  activeFloorId,
  handleDeleteFloor
}) => {

  const dispatch = useAppDispatch();

  const handleSetActiveFloor = () => {
    dispatch(entityActions.setActiveId(AppData.Floors, id));
  };

  const handleToggleFloorVisibility = () => {
    dispatch(entityActions.updateEntity(AppData.Floors, { id, isHidden: !isHidden }));
  };

  return (
    <Row
      alignItems="center"
      $mt={ SpacingPropTypes.sm }
    >
      <Button
        onClick={ handleSetActiveFloor }
        $mt={ SpacingPropTypes.xs } $mr={ SpacingPropTypes.xs }
        $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.md } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.md }
      >Floor { id }</Button>
      <Button
        onClick={ handleToggleFloorVisibility }
        $mt={ SpacingPropTypes.xs } $mr={ SpacingPropTypes.xs }
        $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.sm } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.sm }
      >{ !isHidden ? <>&#9660;</> : <>&#9654;</> }</Button>
      <Button
        onClick={ handleDeleteFloor }
        $mt={ SpacingPropTypes.xs } $mr={ SpacingPropTypes.xs }
        $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.sm } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.sm }
      >X</Button>
    </Row>
  );
};

export default FloorLayer;
