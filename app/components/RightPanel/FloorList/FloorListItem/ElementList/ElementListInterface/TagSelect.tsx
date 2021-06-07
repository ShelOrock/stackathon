import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as StyledComponents from '../../../../../StyledComponents';
const { StyledButton: { PillButton } } = StyledComponents;

import * as ReduxActions from '../../../../../../redux/actions'
const {
  roomActions: { updateRoom },
  doorActions: { updateDoor },
  windowActions: { updateWindow },
} = ReduxActions;

import { ElementTypes } from '../../../../../../types';

export default (element: ElementTypes): JSX.Element => {
  const { index } = element

  const dispatch = useDispatch();

  const pillColors: string[] = [
    'blue',
    'green',
    'yellow',
    'red',
    'purple'
  ];
  
  const evaluateElementType = (_e, element: ElementTypes, pill: string): void => {
    switch(element.type) {
      case 'room':
        dispatch(updateRoom({ index, tag: pill }));
        break;

      case 'door':
        dispatch(updateDoor({ index, tag: pill }));
        break;

      case 'window': 
        dispatch(updateWindow({ index, tag: pill }));
        break;
    };
  };

  interface ButtonPropTypes {
    key: string;
    variant: string;
    onClick: any;
    active: boolean;
  }

  const renderPills = (): JSX.Element[] => (
    pillColors.map((pill: string) => {
      const buttonProps:ButtonPropTypes = {
        key: pill,
        variant: pill,
        onClick: (e) => evaluateElementType(e, element, pill),
        active: element.tag == pill
      }
    return <PillButton { ...buttonProps } /> 
    })
  );

  return (
    <>
      { renderPills() }
    </>
  )
};