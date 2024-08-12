import * as React from 'react';
import { useAppSelector } from "../../hooks";

import Grid from './Grid';
import Rooms from './Rooms';
import Doors from './Doors';
import Windows from './Windows';

import * as StyledComponent from '../StyledComponents';
const { StyledCanvas: { Canvas } } = StyledComponent;

export default () => {

  const {
    canvasSize,
    toggleGrid
  } = useAppSelector(state => state);

  return (
    <Canvas size={ canvasSize }>
      { !!toggleGrid && <Grid size={ canvasSize }/> }
      <Rooms />
      <Doors />
      <Windows />
    </Canvas>
  );
};