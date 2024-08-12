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
  } = useAppSelector(state => state);

  const gridIsShowing = useAppSelector(state => state.toggleElements.grid.isShowing);

  return (
    <Canvas size={ canvasSize }>
      { gridIsShowing && <Grid size={ canvasSize }/> }
      <Rooms />
      <Doors />
      <Windows />
    </Canvas>
  );
};