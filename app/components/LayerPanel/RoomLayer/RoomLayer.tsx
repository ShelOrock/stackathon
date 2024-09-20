import React from "react";

import Column from "../../Column";

import { ComponentPropTypes } from "./types";
import EntityLayer from "../EntityLayer";
import { AppData, Styles } from "../../../enums";
import ComponentMapping from "../../ComponentMapping";
import { useAppDispatch, useAppSelector, useIndexData } from "../../../hooks";
import { AppDataSelectors } from "../../../redux/selectors";
import Row from "../../Row";
import Button from "../../Button";
import { entityActions } from "../../../redux/actions";
import * as Emojis from "../../Emojis";
import Tag from "../../Tag";

const RoomLayer: React.FC<ComponentPropTypes> = ({
  id, 
  label,
  isHidden,
  isLocked,
  isHighlighted,
  tag,
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

  const doors = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors, {
    filters: { room: id }
  }));

  const windows = useAppSelector(AppDataSelectors.selectAppData(AppData.Windows, {
    filters: { room: id }
  }));

  const handleToggleEntityHighlight = () => {
    dispatch(entityActions.updateEntity(AppData.Rooms, {
      id,
      isHighlighted: !isHighlighted
    }));
  };

  const handleToggleEntityLock = () => {
    dispatch(entityActions.updateEntity(AppData.Rooms, {
      id, 
      isLocked: !isLocked
    }));
  };

  const handleToggleEntityHidden = () => {
    dispatch(entityActions.updateEntity(AppData.Rooms, {
      id,
      isHidden: !isHidden
    }));
  };

  const handleSetEntityTag = tag => {
    dispatch(entityActions.updateEntity(AppData.Rooms, {
      id,
      tag
    }));
  };

  const handleDeleteEntity = () => {
    dispatch(entityActions.deleteEntity(AppData.Rooms, id));
    doors.forEach(door => dispatch(entityActions.deleteEntity(AppData.Doors, door.id)));
    windows.forEach(door => dispatch(entityActions.deleteEntity(AppData.Windows, door.id)));
  };

  return (
    <Column $mt={ Styles.Spacings.sm }>
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
      <Column $ml={ Styles.Spacings.sm }>
        <ComponentMapping
          componentData={ doors }
          renderComponent={ door => (
            <EntityLayer
              appDataType={ AppData.Doors }
              { ...door }
            />
          ) }
        />
      </Column>
      <Column>
        <ComponentMapping
          componentData={ windows }
          renderComponent={ window => (
            <EntityLayer
              appDataType={ AppData.Windows }
              { ...window }
            />
          ) }
        />
      </Column>
    </Column>
  )
};

export default RoomLayer;
