import React from 'react';

import Canvas from '../components/Canvas';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import Row from '../components/Row';
import Grid from '../components/Grid';
import Rooms from '../components/Rooms';
import Doors from '../components/Doors';
import Windows from '../components/Windows';
import { useAppSelector } from '../hooks';

const Planner = () => {

  const canvasSize = useAppSelector(state => state.canvasSize);
  const gridIsShowing = useAppSelector(state => state.toggleElements.grid.isShowing);

  return (
    <Row>
      <LeftPanel />
      <Canvas canvasSize={ canvasSize }>
        { gridIsShowing && <Grid canvasSize={ canvasSize } /> }
        <Rooms />
        <Doors />
        <Windows />
      </Canvas>
      <RightPanel />
    </Row>
  );
};

export default Planner;
