import React from "react";

import Row from "../../Row";
import Button from "../../Button";
import ComponentMapping from "../../ComponentMapping";
import { PillButton } from "../../StyledComponents/StyledButton";
import { useAppDispatch, useIndexData } from "../../../hooks";
import { entityActions } from "../../../redux/actions";
import { ComponentPropTypes } from "./types";
import { SpacingPropTypes } from "../../../types/styles";

const UNTITLED_ELEMENT = "Untitled Element";

const EntityLayer: React.FC<ComponentPropTypes> = ({
  id,
  appDataType,
  label = UNTITLED_ELEMENT,
  isHighlighted = false,
  isLocked = false,
  isHidden = false,
  tag = ""
}) => {

  const dispatch = useAppDispatch();

  const TAG_OPTIONS = [
    "blue",
    "green",
    "yellow",
    "red",
    "purple"
  ];

  const { indexedData: indexedTagOptions } = useIndexData(TAG_OPTIONS, "tagOption");

  const handleToggleEntityHighlight = () => {
    dispatch(entityActions.updateEntity(appDataType, { id, isHighlighted: !isHighlighted }));
  };

  const handleToggleEntityLock = () => {
    dispatch(entityActions.updateEntity(appDataType, { id, isLocked: !isLocked }));
  };

  const handleToggleEntityHidden = () => {
    dispatch(entityActions.updateEntity(appDataType, { id, isHidden: !isHidden }));
  };

  const handleSetEntityTag = tag => {
    dispatch(entityActions.updateEntity(appDataType, { id, tag }));
  };

  const handleDeleteEntity = () => {
    dispatch(entityActions.deleteEntity(appDataType, id));
  };

  return (
    <Row $mt={ SpacingPropTypes.xs }>
      <Button 
        onClick={ handleToggleEntityHighlight }
        $mr={ SpacingPropTypes.xs }
        $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.md } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.md }
      >{ label }</Button>
      <Button
        onClick={ handleToggleEntityLock }
        $mr={ SpacingPropTypes.xs }
        $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.sm } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.sm }
      >{ isLocked ? <>&#128274;</> : <>&#128275;</> }</Button>
      <Button
        $mr={ SpacingPropTypes.xs }
        $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.sm } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.sm }
        onClick={ handleToggleEntityHidden }
      >{ isHidden ? <>&#127770;</> : <>&#127774;</> }</Button>
      <ComponentMapping
        componentData={ indexedTagOptions }
        renderComponent={ ({ tagOption }) => (
          <PillButton
            variant={ tagOption }
            onClick={ () => handleSetEntityTag(tagOption) }
            active={ tagOption === tag }
          />
        ) }
      />
      <Button
        onClick={ handleDeleteEntity }
        $mt={ SpacingPropTypes.xs } $mr={ SpacingPropTypes.xs }
        $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.sm } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.sm }
      >X</Button>
    </Row>
  );
};

export default EntityLayer;
