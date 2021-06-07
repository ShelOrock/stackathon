import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Rnd } from 'react-rnd';

import WindowHUD from './WindowHUD';
import * as StyledComponents from '../../StyledComponents';
const { StyledElements: { Window } } = StyledComponents;

import * as ReduxActions from '../../../redux/actions';
const { windowActions: { updateWindow } } = ReduxActions;

import {
  WindowTypes,
  RndPropTypes,
  OnDoubleClickType,
  OnDragStopType
} from '../../../types';

export default (window: WindowTypes) => {
  const {
    index,
    isLocked,
    isHidden,
    isDisabled
  } = window;

  const gridSnap: number = 25;

  const dispatch = useDispatch();

  const onDragStop: OnDragStopType = (_e, delta) => {
    let xPos = Math.round(delta.x / gridSnap) * gridSnap;
    let yPos = Math.round(delta.y / gridSnap) * gridSnap;
    dispatch(updateWindow({
      index,
      xPos,
      yPos
    }));
  }

  const onDoubleClick: OnDoubleClickType = () => {
    let width = window.height;
    let height = window.width;
    let orientation;

    switch(window.orientation) {
      case 'NS':
        orientation = 'WE';
        break;

      case 'WE':
        orientation = 'NS';
        break;

      default:
        break;
    };

    dispatch(updateWindow({
      index, 
      width,
      height,
      orientation
    }));
  }

  const rndProps: RndPropTypes = {
    dragGrid: [ gridSnap, gridSnap ],
    enableResizing: false,
    position: {
      x: window.xPos,
      y: window.yPos
    },
    size: {
      width: window.width,
      height: window.height
    },
    onDragStop,
    onDoubleClick,
    disableDragging: isLocked || isDisabled,
    style: { 'zIndex': isDisabled ? '0' : '2' }
  }

  const evaluateWindowColor = (window: WindowTypes): string => {
    if(window.isDisabled) return 'disabled'
    else if (window.isHighlighted) return window.tag
    else return 'black'
  };

  console.log(window.tag)

  interface WindowStylePropTypes {
    width: number;
    height: number;
    orientation: 'NS' | 'WE';
    variant: string;
  };

  const windowStyleProps: WindowStylePropTypes = {
    width: window.width,
    height: window.height,
    orientation: window.orientation,
    variant: evaluateWindowColor(window)
  }

  return (
    !isHidden &&
    <Rnd { ...rndProps }>
      { !isDisabled && <WindowHUD { ...window } /> }
      <Window { ...windowStyleProps } />
    </Rnd>
  );
};
