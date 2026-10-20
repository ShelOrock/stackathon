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

  const dispatch = useAppDispatch();

  return <></>
};

export default Roof;
