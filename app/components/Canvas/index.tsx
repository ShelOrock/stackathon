import * as React from 'react';
import { useAppSelector } from "../../hooks";

import Grid from './Grid';
import Rooms from './Rooms';
import Doors from './Doors';
import Windows from './Windows';

import StyledCanvas from './styles';

const Canvas = () => {

  const { canvasSize } = useAppSelector(state => state);

  const gridIsShowing = useAppSelector(state => state.toggleElements.grid.isShowing);

  return (
    <StyledCanvas size={ canvasSize }>
      { gridIsShowing && <Grid size={ canvasSize }/> }
      <Rooms />
      <Doors />
      <Windows />
    </StyledCanvas>
  );
};

export default Canvas;
