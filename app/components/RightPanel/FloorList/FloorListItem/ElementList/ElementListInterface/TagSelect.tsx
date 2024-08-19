import React from 'react';
import { useAppDispatch, useIndexData } from "../../../../../../hooks";

import * as StyledComponents from '../../../../../StyledComponents';
const { StyledButton: { PillButton } } = StyledComponents;

import { ElementTypes } from '../../../../../../types';
import { AppData } from '../../../../../../enums';
import { updateEntity } from '../../../../../../redux/entities/actions';
import ComponentMapping from '../../../../../ComponentMapping';

export default (element): JSX.Element => {
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
      case AppData.Rooms:
        dispatch(updateEntity(AppData.Rooms, { id, tag: pill }));
        break;

      case AppData.Doors:
        dispatch(updateEntity(AppData.Doors, { id, tag: pill }));
        break;

      case AppData.Windows: 
        dispatch(updateEntity(AppData.Windows, { id, tag: pill }));
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