import React from "react";
import { findMissingId } from "../../../utils";
import { useAppDispatch, useAppSelector } from "../../../hooks";

import { selectAppData } from "../../../redux/entities/selectors";
import { AppData } from "../../../enums";
import { addEntity } from "../../../redux/entities/actions";
import Button from "../../Button";

export default () => {

  const dispatch = useAppDispatch();

  const rooms = useAppSelector(selectAppData(AppData.Rooms, {
    attributes: [ "id" ]
  } ));
  const { currentFloor } = useAppSelector(state => state);

  const handleCreateRoom = () => {
    const id = findMissingId(rooms);

    dispatch(addEntity(AppData.Rooms, {
      id,
      width: 100,
      height: 100,
      zAxis: 2,
      xPos: 0,
      yPos: 0,
      label: `Room ${ id + 1 }`,
      isHighlighted: false,
      isLocked: false,
      isHidden: false,
      floor: currentFloor.index,
      tag: "blue",
    }));
  };

  return <Button onClick={ handleCreateRoom }>+ Create a new room</Button>;
};
