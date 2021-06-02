import React from 'react';

import BuildButton from './BuildButton';
import ResetButton from './ResetButton';
import * as StyledComponents from '../../StyledComponents';
const { StyledDiv: { Row } } = StyledComponents;

export default () => {

  return (
    <Row>
      <BuildButton />
      <ResetButton />
    </Row>
  )
};
