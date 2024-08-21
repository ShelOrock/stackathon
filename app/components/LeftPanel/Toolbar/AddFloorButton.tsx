import React from "react";
import { findMissingId } from "../../../utils";

import { OnClickType } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import Button from "../../Button";
import { addEntity, setActiveId } from "../../../redux/entities/actions";
import { AppData } from "../../../enums";
import { AppDataSelectors } from "../../../redux/selectors";

export default () => {

  const dispatch = useAppDispatch();

  const floors = useAppSelector(AppDataSelectors.selectAppData(AppData.Floors, {
    attributes: [ "id" ]
  }));

  const handleOnClick: OnClickType = () => {
    const id = findMissingId(floors);

    dispatch(addEntity(AppData.Floors, {
      id,
      label: `Floor ${ id }`,
      isHighlighted: false,
      isHidden: false
    }));
    dispatch(setActiveId(AppData.Floors, id));
  };

  return (
    <Button
      onClick={ handleOnClick }
      variant="primary"
    >+ Add Floor</Button>
  );
};