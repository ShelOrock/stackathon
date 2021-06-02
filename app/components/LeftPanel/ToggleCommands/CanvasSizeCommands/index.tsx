import * as React from 'react';

import SetCanvasSizeButton from './SetCanvasSizeButton';
import * as StyledComponents from '../../../StyledComponents';
const { StyledDiv: { Row } } = StyledComponents;

export default () => {

  const SMALL_CANVAS_SIZE = 300;
  const MEDIUM_CANVAS_SIZE = 400;
  const LARGE_CANVAS_SIZE = 600;
  const EXTRA_LARGE_CANVAS_SIZE = 800;

  return (
    <Row>
      <SetCanvasSizeButton size={ SMALL_CANVAS_SIZE } label='small' />
      <SetCanvasSizeButton size={ MEDIUM_CANVAS_SIZE } label='medium'/>
      <SetCanvasSizeButton size={ LARGE_CANVAS_SIZE } label='large'/>
      <SetCanvasSizeButton size={ EXTRA_LARGE_CANVAS_SIZE } label='extra large'/>
    </Row>
  )
}