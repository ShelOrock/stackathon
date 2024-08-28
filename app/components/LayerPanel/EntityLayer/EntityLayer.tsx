import React from "react";

import Row from "../../Row";
import Button from "../../Button";
import ComponentMapping from "../../ComponentMapping";
import { useAppDispatch, useIndexData } from "../../../hooks";
import { entityActions } from "../../../redux/actions";
import { ComponentPropTypes } from "./types";
import { Styles } from "../../../enums";

import * as Emojis from "../../Emojis";
import Tag from "../../Tag";

const UNTITLED_ELEMENT = "Untitled Element";
const DEFAULT_TAG_VALUE = "";

const EntityLayer: React.FC<ComponentPropTypes> = ({
  appDataType,
  id,
  label = UNTITLED_ELEMENT,
  isHighlighted = false,
  isLocked = false,
  isHidden = false,
  tag = DEFAULT_TAG_VALUE
}) => {

  const dispatch = useAppDispatch();

  const TAG_OPTIONS = [
    Styles.Colors.blue,
    Styles.Colors.green,
    Styles.Colors.yellow,
    Styles.Colors.red,
    Styles.Colors.purple
  ];

  const TAG_OPTION_KEY = "tagOption";

  const { indexedData: indexedTagOptions } = useIndexData(TAG_OPTIONS, TAG_OPTION_KEY);

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
    <Row
      alignItems={ Styles.AlignItems.center }
      justifyContent={ Styles.JustifyContent.center }
      $mt={ Styles.Spacings.xs }
    >
      <Button 
        onClick={ handleToggleEntityHighlight }
        variant={ isHighlighted ? Styles.ButtonVariants.primary : Styles.ButtonVariants.secondary }
        color={ tag }
        $mr={ Styles.Spacings.xs }
        $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.md } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.md }
      >{ label }</Button>
      <Button
        onClick={ handleToggleEntityLock }
        $mr={ Styles.Spacings.xs }
        variant={ Styles.ButtonVariants.primary }
        color={ tag }
        $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
      >{ isLocked ? <Emojis.Locked /> : <Emojis.Unlocked /> }</Button>
      <Button
        onClick={ handleToggleEntityHidden }
        variant={ Styles.ButtonVariants.primary }
        color={ tag }
        $mr={ Styles.Spacings.xs }
        $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
      >{ isHidden ? <Emojis.Hidden /> : <Emojis.Unhidden /> }</Button>
      <ComponentMapping
        componentData={ indexedTagOptions }
        renderComponent={ ({ tagOption }) => (
          <Tag
            onClick={ () => handleSetEntityTag(tagOption) }
            color={ tagOption }
            variant={ tagOption === tag ? Styles.ButtonVariants.primary : Styles.ButtonVariants.secondary }
            $mr={ Styles.Spacings.xs }
          />
        ) }
      />
      <Button
        onClick={ handleDeleteEntity }
        variant={ Styles.ButtonVariants.tertiary }
        color={ Styles.Colors.red }
        $mt={ Styles.Spacings.xs } $mr={ Styles.Spacings.xs }
        $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
      >X</Button>
    </Row>
  );
};

export default EntityLayer;
