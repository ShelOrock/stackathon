import React from "react";
import { useAppDispatch } from "../../../hooks";

import { OnClickType } from "../../../types";
import { resetActiveId, resetEntities } from "../../../redux/entities/actions";
import { AppData } from "../../../enums";
import Button from "../../Button";

export default () => {

  const dispatch = useAppDispatch();

  const handleOnClick: OnClickType = () => {
    dispatch(resetEntities(AppData.Floors));
    dispatch(resetActiveId(AppData.Floors));
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
