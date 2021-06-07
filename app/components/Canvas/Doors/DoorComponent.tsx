import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Rnd } from 'react-rnd';

import DoorHUD from './DoorHUD';
import * as StyledComponents from '../../StyledComponents';
const { StyledElements: { Door } } = StyledComponents;

import { updateDoor } from '../../../redux/doors/actions';

import {
  DoorTypes,
  OnDragStopType,
  OnDoubleClickType,
  RndPropTypes
} from '../../../types';

export default (door: DoorTypes) => {
  const {
    index,
    isHidden,
    isHighlighted,
    isLocked,
    isDisabled,
    tag
  } = door;

  const gridSnap: number = 25;

  const dispatch = useDispatch();

  const onDragStop: OnDragStopType = (_e, delta) => {
    let xPos = Math.round(delta.x / gridSnap) * gridSnap;
    let yPos = Math.round(delta.y / gridSnap) * gridSnap;
    dispatch(updateDoor({
      index,
      xPos,
      yPos
    }));
  };

  const onDoubleClick: OnDoubleClickType = () => {
    let width = door.height;
    let height = door.width;
    let orientation;

    switch(door.orientation) {
      case 'NS':
        orientation = 'WE';
        break;

      case 'WE':
        orientation = 'NS';
        break;

      default:
        break;
    };

    dispatch(updateDoor({
      index,
      width,
      height,
      orientation
    }));
  };

  const rndProps: RndPropTypes = {
    dragGrid: [ gridSnap, gridSnap ],
    enableResizing: false,
    position: {
      x: door.xPos,
      y: door.yPos
    },
    size: {
      width: door.width,
      height: door.height
    },
    onDragStop,
    onDoubleClick,
    disableDragging: isLocked || isDisabled,
    style: { 'zIndex': isDisabled ? '0' : '2' }
  }

  const evaluateDoorColor = (door: DoorTypes): string => {
    if(door.isDisabled) return 'disabled'
    else if (door.isHighlighted) return door.tag
    else return 'black'
  };

  interface DoorStylePropTypes {
    width: number;
    height: number;
    orientation: 'NS' | 'WE';
    variant: string;
  };

  const doorStyleProps: DoorStylePropTypes = {
    width: door.width,
    height: door.height,
    orientation: door.orientation,
    variant: evaluateDoorColor(door),
  };

  return (
    !isHidden &&
    <Rnd { ...rndProps }>
      { !isDisabled && <DoorHUD { ...door }/> }
      <Door { ...doorStyleProps } />
    </Rnd>
  )
};
