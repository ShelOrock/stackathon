import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Rnd } from 'react-rnd';

import RoomHUD from './RoomHUD';
import * as StyledComponents from '../../StyledComponents';
const { StyledElements: { Room } } = StyledComponents;

import { updateRoom } from '../../../redux/rooms/actions'

import {
  RoomTypes,
  RndPropTypes,
  OnDragStopType,
  OnResizeType,
  OnDoubleClickType,
} from '../../../types'

export default (room: RoomTypes) => {

  const GRID_SNAP: number = 25;

  const dispatch = useDispatch();
  
  const {
    index,
    isLocked,
    isHidden,
    isDisabled
  } = room;

  const onDragStop: OnDragStopType = (_e, delta) => {
    let xPos = Math.round(delta.x / GRID_SNAP) * GRID_SNAP;
    let yPos = Math.round(delta.y / GRID_SNAP) * GRID_SNAP;
    dispatch(updateRoom({
      index,
      xPos,
      yPos
    }));
  }

  const onResize: OnResizeType = (
    _e,
    _direction,
    ref,
    _delta,
    position
  ) => {
    let width = Math.round(parseInt(ref.style.width) / GRID_SNAP) * GRID_SNAP;
    let height = Math.round(parseInt(ref.style.height) / GRID_SNAP) * GRID_SNAP;
    dispatch(updateRoom({
      index,
      width,
      height,
      xPos: position.x,
      yPos: position.y
    }));
  };

  const onDoubleClick: OnDoubleClickType = () => dispatch(updateRoom({ index, isHighlighted: !room.isHighlighted }))

  const rndProps: RndPropTypes = {
    dragGrid: [ GRID_SNAP, GRID_SNAP ],
    resizeGrid: [ GRID_SNAP, GRID_SNAP ],
    position: {
      x: room.xPos,
      y: room.yPos
    },
    size: {
      width: room.width,
      height: room.height
    },
    onDragStop,
    onResize,
    onDoubleClick,
    disableDragging: isLocked || isDisabled,
    enableResizing: !isLocked && !isDisabled,
    style: { 'zIndex': isDisabled ? '0' : '1' }
  };

  const evaluateRoomColor = (room: RoomTypes): string => {
    if(room.isDisabled) return 'disabled'
    else if (room.isHighlighted) return room.tag
    else return 'black'
  }

  interface RoomStylePropTypes {
    width: number;
    height: number;
    variant: string;
  };

  const roomStyleProps: RoomStylePropTypes = {
    width: room.width,
    height: room.height,
    variant: evaluateRoomColor(room),
  };

  return (
    !isHidden &&
    <Rnd { ...rndProps }>
      { !isDisabled && <RoomHUD { ...room } /> }
      <Room { ...roomStyleProps } />
    </Rnd>
  )
}