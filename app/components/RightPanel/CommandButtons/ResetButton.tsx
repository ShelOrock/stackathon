import React from "react";
import { useAppDispatch } from "../../../hooks";

import * as ReduxActions from "../../../redux/actions";
const {
  floorActions: { resetFloors },
  currentFloorActions: { resetCurrentFloor },
  } = ReduxActions;

import { OnClickType } from "../../../types";
import { resetEntities } from "../../../redux/entities/actions";
import { AppData } from "../../../enums";
import Button from "../../Button";

export default () => {

  const dispatch = useAppDispatch();

  const handleOnClick: OnClickType = () => {
    dispatch(resetFloors());
    dispatch(resetCurrentFloor());
    dispatch(resetEntities(AppData.Rooms));
    dispatch(resetEntities(AppData.Doors));
    dispatch(resetEntities(AppData.Windows));
  };

  return (
    <Button
      onClick={ handleOnClick }
      variant="tertiary"
    >Reset</Button>
  );
};
