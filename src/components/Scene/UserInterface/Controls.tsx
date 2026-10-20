import React from "react";

import * as StyledComponents from "../../StyledComponents";
import { LinkButton } from "../../StyledComponents/StyledButton";
import Slider from "../../Slider";
import Button from "../../Button";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { resetSunPosition, setSunPosition } from "../../../redux/sunPosition/actions";
import { toggleElementsActions } from "../../../redux/actions";
import { UIData } from "../../../enums";
const { StyledControls: { Controls } } = StyledComponents;

export default () => {

  const MIN_SUN_POSITION = "-50";
  const MAX_SUN_POSTIION = "50";

  const dispatch = useAppDispatch();

  const sunPosition = useAppSelector(state => state.sunPosition);

  const elementLabelsIsShowing = useAppSelector(state => state.toggleElements.elementLabels.isShowing);

  const handleSetSunPosition = e => dispatch(setSunPosition(e.target.value))

  const handleResetSunPosition = () => dispatch(resetSunPosition());

  const handleToggleElementLabels = () => dispatch(toggleElementsActions.setToggleElement(UIData.ElementLabels, !elementLabelsIsShowing));

  return (
    <Controls>
      <LinkButton to="/">BACK</LinkButton>
      <Slider 
        min={ MIN_SUN_POSITION }
        max={ MAX_SUN_POSTIION }
        value={ sunPosition }
        onChange={ handleSetSunPosition }
      />
      <Button onClick={ handleResetSunPosition }>Reset Sun</Button>
      <Button onClick={ handleToggleElementLabels }>Toggle Labels</Button>
    </Controls>
  )
}