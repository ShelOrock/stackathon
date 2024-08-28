import React from "react";
import { useAppDispatch } from "../../../hooks";

import { AppData, DefaultLabels, Styles } from "../../../enums";
import Row from "../../Row";
import { entityActions } from "../../../redux/actions";
import { ComponentPropTypes } from "./types";
import Button from "../../Button";
import * as Emojis from "../../Emojis";

const FloorLayer: React.FC<ComponentPropTypes> = ({
  id,
  isHidden = true,
  activeFloorId,
  handleDeleteFloor
}) => {

  const dispatch = useAppDispatch();

  const handleSetActiveFloor = () => {
    dispatch(entityActions.setActiveId(AppData.Floors, id));
  };

  const handleToggleFloorVisibility = () => {
    dispatch(entityActions.updateEntity(AppData.Floors, { id, isHidden: !isHidden }));
  };

  return (
    <Row
      alignItems={ Styles.AlignItems.center }
      $mt={ Styles.Spacings.sm }
    >
      <Button
        onClick={ handleSetActiveFloor }
        variant={ id === activeFloorId ? Styles.ButtonVariants.primary : Styles.ButtonVariants.secondary }
        color={ Styles.Colors.blue }
        $mt={ Styles.Spacings.xs } $mr={ Styles.Spacings.xs }
        $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.md } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.md }
      >{ DefaultLabels.UntitledFloor } { id }</Button>
      <Button
        variant={ Styles.ButtonVariants.primary }
        color={ Styles.Colors.blue }
        onClick={ handleToggleFloorVisibility }
        $mt={ Styles.Spacings.xs } $mr={ Styles.Spacings.xs }
        $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
      >{ isHidden ? <Emojis.Hidden /> : <Emojis.Unhidden /> }</Button>
      <Button
        variant={ Styles.ButtonVariants.tertiary }
        color={ Styles.Colors.red }
        onClick={ handleDeleteFloor }
        $mt={ Styles.Spacings.xs } $mr={ Styles.Spacings.xs }
        $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
      >X</Button>
    </Row>
  );
};

export default FloorLayer;
