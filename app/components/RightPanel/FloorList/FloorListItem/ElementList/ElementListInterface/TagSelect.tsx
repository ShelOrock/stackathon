import * as React from 'react';
import { useAppDispatch, useIndexData } from "../../../../../../hooks";

import * as StyledComponents from '../../../../../StyledComponents';
const { StyledButton: { PillButton } } = StyledComponents;

import * as ReduxActions from '../../../../../../redux/actions'
const {
  roomActions: { updateRoom },
  windowActions: { updateWindow },
} = ReduxActions;

import { ElementTypes } from '../../../../../../types';
import { AppData } from '../../../../../../enums';
import UIDataEntities from '../../../../../../types/redux/entities';
import { updateEntity } from '../../../../../../redux/entities/actions';
import ComponentMapping from '../../../../../ComponentMapping';

export default (element: ElementTypes): JSX.Element => {
  const { id } = element

  const dispatch = useAppDispatch();

  const pillColors: string[] = [
    'blue',
    'green',
    'yellow',
    'red',
    'purple'
  ];
  
  const evaluateElementType = (_e, element: ElementTypes, pill: string): void => {
    switch(element.type) {
      case AppData.ROOMS:
        dispatch(updateRoom({ id, tag: pill }));
        break;

      case AppData.DOORS:
        dispatch(updateEntity(UIDataEntities.doors, { id, tag: pill }));
        break;

      case AppData.WINDOWS: 
        dispatch(updateWindow({ id, tag: pill }));
        break;
    };
  };

  const { indexedData: indexedPills } = useIndexData(pillColors, "pills");

  return (
    <ComponentMapping
      componentData={ indexedPills }
      renderComponent={ ({ pill }) => (
        <PillButton
          variant={ pill }
          onClick={ e => evaluateElementType(e, element, pill) }
          active={ element.tag === pill }
        />
      ) }
    />
  )
};