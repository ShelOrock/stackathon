import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { AppData } from "../../enums";
import { AppDataSelectors } from "../../redux/selectors";

const Roof = ({
  id,
  label,
  isDisabled,
  isHidden,
  isHighlighted,
  isLocked,
  height,
  width,
  orientation,
  xPosition,
  yPosition,
  tag,
  activeFloor
}) => {
  const GRID_SNAP = 25;

  const roomsFromFloorBelow = useAppSelector(AppDataSelectors.selectAppData(AppData.Rooms, {
    filters: { floor: activeFloor.id - 1 }
  }));

  const checkIsInRooms = (xPosition, yPosition, width, height, rooms) => {
    return rooms.some(room => {
      return (
        xPosition >= room.xPosition &&
        xPosition + width <= room.xPosition + room.width &&
        yPosition >= room.yPosition &&
        yPosition + height <= room.yPosition + room.height
      );
    });
  };

  const dispatch = useAppDispatch();

  return <></>
};

export default Roof;
