import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks';

import StyledWindowHUD from './styles';

import Row from '../../Row';
import Column from '../../Column';
import Button from '../../Button';
import { InputField } from '../../StyledComponents/StyledForm';

import { deleteWindow, updateWindow } from '../../../redux/windows/actions';

import { ComponentPropTypes } from './types';

const WindowHUD: React.FC<ComponentPropTypes> = ({
  index,
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
            onClick={ () => dispatch(deleteWindow(index)) }
            variant="tertiary"
          >X</Button>
          <Button
            onClick={ () => dispatch(updateWindow({ index, isLocked: !isLocked }))}
            variant="tertiary"
          >{ isLocked ? <>&#128274;</> : <>&#128275;</> }</Button>
          <Button
            onClick={ () => dispatch(updateWindow({ index, isHidden: !isHidden }))}
            variant="tertiary"
          >{ isHidden ? <>&#127770;</> : <>&#127774;</> }</Button>
        </Row>
        { elementLabelsIsShowing && (
          <InputField
            type="text"
            name="label"
            placeholder={ `Window ${ index + 1 }` }
            value={ label }
            onChange={ e => dispatch(updateWindow({ index, label: e.target.value })) }
          />
        ) }
      </Column>
    </StyledWindowHUD>
  )
};

export default WindowHUD;
