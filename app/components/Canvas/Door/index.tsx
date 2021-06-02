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
    if(door.orientation == 'NS') {
      orientation = 'WE'
    } else {
      orientation = 'NS'
    }
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
    disableDragging: isLocked
  }

  interface DoorStylePropTypes {
    width: number;
    height: number;
    variant: string;
  }

  const doorStyleProps: DoorStylePropTypes = {
    width: door.width,
    height: door.height,
    variant: isHighlighted ? tag : 'black'
  };

  return (
    !isHidden &&
    <Rnd { ...rndProps }>
      <Door { ...doorStyleProps }/>
      <DoorHUD { ...door } />
    </Rnd>
  )
};
