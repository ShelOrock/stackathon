import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";

import Row from "../Row";
import Column from "../Column";
import Button from "../Button";

import { ComponentPropTypes } from "./types";
import { entityActions } from "../../redux/actions";
import { Styles } from "../../enums";
import StyledFloatingTools from "./styles";
import Input from "../Input";
import * as Emojis from "../Emojis";

const FloatingTools: React.FC<ComponentPropTypes> = ({
  appDataType,
  id,
  label,
  isLocked,
  isHidden,
  tag = Styles.Colors.blue
}) => {

  const dispatch = useAppDispatch();

  const elementLabelsIsShowing = useAppSelector(state => state.toggleElements.elementLabels.isShowing);
  const elementActionsIsShowing = useAppSelector(state => state.toggleElements.elementActions.isShowing);

  const handleDeleteEntity = () => {
    dispatch(entityActions.deleteEntity(appDataType, id));
  };

  const handleToggleEntityLock = () => {
    dispatch(entityActions.updateEntity(appDataType, { id, isLocked: !isLocked }));
  };

  const handleToggleEntityHighlight = () => {
    dispatch(entityActions.updateEntity(appDataType, { id, isHidden: !isHidden }));
  };

  const handleUpdateEntityLabel = e => {
    dispatch(entityActions.updateEntity(appDataType, { id, label: e.target.value }));
  };

  return (
    elementActionsIsShowing && (
      <StyledFloatingTools>
        <Column>
          <Row
            alignItems={ Styles.AlignItems.center }
            justifyContent={ Styles.JustifyContent.center }
          >
            <Button
              onClick={ handleDeleteEntity }
              variant={ Styles.ButtonVariants.tertiary }
              color={ Styles.Colors.red }
              $mr={ Styles.Spacings.xs }
            >X</Button>
            <Button
              onClick={ handleToggleEntityLock }
              variant={ Styles.ButtonVariants.secondary }
              color={ tag }
              $mr={ Styles.Spacings.xs }
            >{ isLocked ? <Emojis.Locked /> : <Emojis.Unlocked /> }</Button>
            <Button
              onClick={ handleToggleEntityHighlight }
              variant={ Styles.ButtonVariants.secondary }
              color={ tag }
              $mr={ Styles.Spacings.xs }
            >{ isHidden ? <Emojis.Hidden /> : <Emojis.Unhidden /> }</Button>
          </Row>
          { elementLabelsIsShowing && (
            <Input
              name="label"
              value={ label }
              placeholder={ `${ appDataType } ${ id + 1 }` }
              onChange={ e => handleUpdateEntityLabel(e) }
              color={ tag }
              $mt={ Styles.Spacings.xs }
            />
          ) }
        </Column>
      </StyledFloatingTools>
    )
  )
};

export default FloatingTools;
