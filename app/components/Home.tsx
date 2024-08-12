import React from 'react';

import Canvas from './Canvas';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import Row from './Row';

export default () => {
  return (
    <Row>
      <LeftPanel />
      <Canvas />
      <RightPanel />
    </Row>
  );
};
