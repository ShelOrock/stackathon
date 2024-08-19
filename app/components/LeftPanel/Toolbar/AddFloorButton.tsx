import React from "react";
import { findMissingId } from "../../../utils";

import * as ReduxActions from "../../../redux/actions";
const {
  floorActions: { createFloor },
  currentFloorActions: { setCurrentFloor }
} = ReduxActions;

import { OnClickType } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import Button from "../../Button";

export default () => {

  const dispatch = useAppDispatch();

  const { floors } = useAppSelector(state => state);

  const handleOnClick: OnClickType = () => {
    const floorId = findMissingId(floors);

    const createdFloor = {
      index: floorId,
      label: `Floor ${ floorId + 1 }`,
      isHighlighted: false,
      isHidden: false
    };
    dispatch(createFloor(createdFloor));
    dispatch(setCurrentFloor(createdFloor));
  };

  return (
    <Button
      onClick={ handleOnClick }
      variant="primary"
    >+ Add Floor</Button>
  );
};