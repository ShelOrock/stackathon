import * as React from 'react';
import { useTypedSelector } from '../../utils';

import Grid from './Grid';
import Room from './Room';
import DoorComponent from './Door';
import WindowComponent from './Window';

import * as StyledComponent from '../StyledComponents';
const { StyledCanvas: { Canvas } } = StyledComponent;

import {
  DoorTypes,
  WindowTypes,
} from '../../types';

export default () => {

  const {
    canvasSize,
    doors,
    windows,
    toggleGrid
  } = useTypedSelector(state => state);

  return (
    <Canvas size={ canvasSize }>
      { !!toggleGrid && <Grid size={ canvasSize }/> }
      <Room />

      { !!doors.length && doors.map((door: DoorTypes) => <DoorComponent key={ door.index } { ...door } />) }
      { !!windows.length && windows.map((window: WindowTypes) => <WindowComponent key={ window.index } { ...window } />) }
    </Canvas>
  );
};