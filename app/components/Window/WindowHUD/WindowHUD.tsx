import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks';

import StyledWindowHUD from './styles';

import Row from '../../Row';
import Column from '../../Column';
import Button from '../../Button';
import { InputField } from '../../StyledComponents/StyledForm';

import { ComponentPropTypes } from './types';
import { deleteEntity, updateEntity } from '../../../redux/entities/actions';
import { AppData } from '../../../enums';

const WindowHUD: React.FC<ComponentPropTypes> = ({
  id,
  label,
  isLocked,
  isHidden
}) => {

  const dispatch = useAppDispatch();

  const elementLabelsIsShowing = useAppSelector(state => state.toggleElements.elementLabels.isShowing);

  return (
    <StyledWindowHUD>
      <Column>
        <Row>
          <Button
            onClick={ () => dispatch(deleteEntity(AppData.Windows, id)) }
            variant="tertiary"
          >X</Button>
          <Button
            onClick={ () => dispatch(updateEntity(AppData.Windows, { id, isLocked: !isLocked }))}
            variant="tertiary"
          >{ isLocked ? <>&#128274;</> : <>&#128275;</> }</Button>
          <Button
            onClick={ () => dispatch(updateEntity(AppData.Windows, { id, isHidden: !isHidden }))}
            variant="tertiary"
          >{ isHidden ? <>&#127770;</> : <>&#127774;</> }</Button>
        </Row>
        { elementLabelsIsShowing && (
          <InputField
            type="text"
            name="label"
            placeholder={ `Window ${ id + 1 }` }
            value={ label }
            onChange={ e => dispatch(updateEntity(AppData.Windows, { id, label: e.target.value })) }
          />
        ) }
      </Column>
    </StyledWindowHUD>
  )
};

export default WindowHUD;
