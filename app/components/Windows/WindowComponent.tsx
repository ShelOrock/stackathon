import * as React from 'react';
import { useAppDispatch } from "../../hooks";
import { Rnd } from 'react-rnd';

import WindowHUD from './WindowHUD';
import * as StyledComponents from '../StyledComponents';
const { StyledElements: { Window } } = StyledComponents;

import * as ReduxActions from '../../redux/actions';
const { windowActions: { updateWindow } } = ReduxActions;

import {
  WindowTypes,
  RndPropTypes,
  OnDoubleClickType,
  OnDragStopType
} from '../../types';
import { Directions } from '../../enums';

export default (window: WindowTypes) => {
  const {
    index,
    isLocked,
    isHidden,
    isDisabled
  } = window;

  const gridSnap: number = 25;

  const dispatch = useAppDispatch();

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
    if(window.orientation === Directions.NORTH_SOUTH) {
      dispatch(updateWindow({
        index,
        width: window.height,
        height: window.width,
        orientation: Directions.EAST_WEST
      }));

      return;
    };

    if(window.orientation === Directions.EAST_WEST) {
      dispatch(updateWindow({
        index,
        width: window.height,
        height: window.width,
        orientation: Directions.NORTH_SOUTH
      }));

      return;
    };
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

  interface WindowStylePropTypes {
    width: number;
    height: number;
    orientation: Directions;
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
