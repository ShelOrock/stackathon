import React from 'react';

import BuildButton from './BuildButton';
import ResetButton from './ResetButton';
import Row from '../../Row';

export default () => {

  return (
    <Row>
      <BuildButton />
      <ResetButton />
    </Row>
  )
};
