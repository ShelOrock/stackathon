import * as React from 'react';
import { useTypedSelector } from '../../utils';

import Grid from './Grid';
import Rooms from './Rooms';
import Doors from './Doors';
import Windows from './Windows';

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
      <Rooms />
      <Doors />
      <Windows />
    </Canvas>
  );
};