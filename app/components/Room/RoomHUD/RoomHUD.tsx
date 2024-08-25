import React from "react";

import Row from "../../Row";

import { AppData } from "../../../enums";
import StyledRoomHUD from "./styles";
import { ComponentPropTypes } from "./types";
import Column from "../../Column";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { entityActions } from "../../../redux/actions";
import Button from "../../Button";
import { InputField } from "../../StyledComponents/StyledForm";

const RoomHUD: React.FC<ComponentPropTypes> = ({
  id,
  label,
  isLocked,
  isHidden
}) => {

  const dispatch = useAppDispatch();

  const elementLabelsIsShowing = useAppSelector(state => state.toggleElements.elementLabels.isShowing);
  const elementActionsIsShowing = useAppSelector(state => state.toggleElements.elementActions.isShowing);

  return (
    elementActionsIsShowing && (
      <StyledRoomHUD>
        <Column>
          <Row>
            <Button
              onClick={ () => dispatch(entityActions.deleteEntity(AppData.Rooms, id)) }
              variant="tertiary"
            >X</Button>
            <Button
              onClick={ () => dispatch(entityActions.updateEntity(AppData.Rooms, { id, isLocked: !isLocked })) }
              variant="tertiary"
            >{ isLocked ? <>&#128274;</> : <>&#128275;</> }</Button>
            <Button
              onClick={ () => dispatch(entityActions.updateEntity(AppData.Rooms, { id, isHidden: !isHidden })) }
            >{ isHidden ? <>&#127770;</> : <>&#127774;</> }</Button>
          </Row>
          { elementLabelsIsShowing && (
            <InputField
              type="text"
              name="label"
              placeholder={ `Room ${ id + 1 }`}
              value={ label }
              onChange={ e => dispatch(entityActions.updateEntity(AppData.Rooms, { id, label: e.target.value })) }
            />
          ) }
        </Column>
      </StyledRoomHUD>
    )
  );
};

export default RoomHUD;
