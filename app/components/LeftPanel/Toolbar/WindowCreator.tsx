import React from "react";
import { findMissingId } from "../../../utils";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { AppData, Directions } from "../../../enums";
import { AppDataSelectors } from "../../../redux/selectors";
import { addEntity } from "../../../redux/entities/actions";
import Button from "../../Button";

export default () => {

  const dispatch = useAppDispatch();

  const windows = useAppSelector(AppDataSelectors.selectAppData(AppData.Windows, {
    attributes: [ "id" ]
  }));
  const activeFloorId = useAppSelector(AppDataSelectors.selectActiveAppData(AppData.Floors, {
    attributes: [ "id" ]
  }));

  const handleCreateWindow = (): void => {
    const id = findMissingId(windows);

    dispatch(addEntity(AppData.Windows, {
      id,
      width: 25,
      height: 2,
      xPos: 0,
      yPos: 0,
      label: `Window ${ id + 1 }`,
      orientation: Directions.EAST_WEST,
      isHighlighted: false,
      isLocked: false,
      isHidden: false,
      floor: activeFloorId,
      tag: "blue",
    }));
  };

  return <Button onClick={ handleCreateWindow }>+ Create new Window</Button>;
};