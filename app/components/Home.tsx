import React from 'react';

import Canvas from './Canvas';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import * as StyledComponents from './StyledComponents';
const { StyledDiv: { Row } } = StyledComponents;

export default () => {
  return (
    <Row>
      <LeftPanel />
      <Canvas />
      <RightPanel />
    </Row>
  );
};
