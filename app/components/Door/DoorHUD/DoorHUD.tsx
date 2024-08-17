import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';

import Row from "../../Row";
import Column from '../../Column';
import Button from '../../Button';

import { deleteDoor, updateDoor } from '../../../redux/doors/actions';

import { ComponentPropTypes } from './types';
import { InputField } from '../../StyledComponents/StyledForm';
import StyledDoorHUD from './styles';

const DoorHUD: React.FC<ComponentPropTypes> = ({
  index,
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
            onClick={ () => dispatch(deleteDoor(index)) }
            variant="tertiary"
          >X</Button>
          <Button
            onClick={ () => dispatch(updateDoor({ index, isLocked: !isLocked }))}
            variant="tertiary"
          >{ isLocked ? <>&#128274;</> : <>&#128275;</> }</Button>
          <Button
            onClick={ () => dispatch(updateDoor({ index, isHidden: !isHidden }))}
            variant="tertiary"
          >{ isHidden ? <>&#127770;</> : <>&#127774;</> }</Button>
        </Row>
        { elementLabelsIsShowing && (
          <InputField
            type="text"
            name="label"
            placeholder={ `Door ${ index + 1 }` }
            value={ label }
            onChange={ e => dispatch(updateDoor({ index, label: e.target.value })) }
          />
        ) }
      </Column>
    </StyledDoorHUD>
  )
};

export default DoorHUD;
