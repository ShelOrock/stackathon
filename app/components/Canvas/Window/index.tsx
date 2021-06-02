import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Rnd } from 'react-rnd';

import { updateWindow } from '../../../redux/windows/actions';

import {
  WindowTypes,
  RndPropTypes,
  OnDoubleClickType,
  OnDragStopType
} from '../../../types';

export default (window: WindowTypes) => {
  const { index } = window;

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
    dispatch(updateWindow({
      index, 
      width,
      height
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
    style: { border: '2px grey solid' }
  }

  return (
    <Rnd { ...rndProps } />
  );
};
