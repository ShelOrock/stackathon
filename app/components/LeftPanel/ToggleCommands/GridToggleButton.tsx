import React from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";

import { OnClickType } from "../../../types";
import { toggleElementsActions } from "../../../redux/actions";
import Button from "../../Button";
import { UIData } from "../../../enums";

export default () => {

  const dispatch = useAppDispatch();

  const gridIsShowing = useAppSelector(state => state.toggleElements.grid.isShowing);

  const handleOnClick: OnClickType = () => {
    dispatch(toggleElementsActions.setToggleElement(UIData.Grid, !gridIsShowing));
  };

  return (
    <Button
      onClick={ handleOnClick }
      variant="primary"
    >Toggle Grid</Button>
  )
}