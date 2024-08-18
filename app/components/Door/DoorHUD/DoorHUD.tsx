import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';

import Row from "../../Row";
import Column from '../../Column';
import Button from '../../Button';

import { deleteDoor } from '../../../redux/doors/actions';

import { ComponentPropTypes } from './types';
import { InputField } from '../../StyledComponents/StyledForm';
import StyledDoorHUD from './styles';
import { deleteEntity, updateEntity } from '../../../redux/entities/actions';
import UIDataEntities from '../../../types/redux/entities';

const DoorHUD: React.FC<ComponentPropTypes> = ({
  id,
  label,
  isLocked,
  isHidden
}) => {

  const dispatch = useAppDispatch();

  const elementLabelsIsShowing = useAppSelector(state => state.toggleElements.elementLabels.isShowing);

  return (
    <StyledDoorHUD>
      <Column>
        <Row>
          <Button
            onClick={ () => dispatch(deleteEntity(UIDataEntities.doors, id)) }
            variant="tertiary"
          >X</Button>
          <Button
            onClick={ () => dispatch(updateEntity(UIDataEntities.doors, { id, isLocked: !isLocked }))}
            variant="tertiary"
          >{ isLocked ? <>&#128274;</> : <>&#128275;</> }</Button>
          <Button
            onClick={ () => dispatch(updateEntity(UIDataEntities.doors, { id, isHidden: !isHidden }))}
            variant="tertiary"
          >{ isHidden ? <>&#127770;</> : <>&#127774;</> }</Button>
        </Row>
        { elementLabelsIsShowing && (
          <InputField
            type="text"
            name="label"
            placeholder={ `Door ${ id + 1 }` }
            value={ label }
            onChange={ e => dispatch(updateEntity(UIDataEntities.doors, { id, label: e.target.value })) }
          />
        ) }
      </Column>
    </StyledDoorHUD>
  )
};

export default DoorHUD;
