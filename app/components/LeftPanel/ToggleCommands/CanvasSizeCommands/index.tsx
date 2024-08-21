import React from 'react';

import Row from '../../../Row';
import Button from '../../../Button';
import { useAppDispatch } from '../../../../hooks';
import { setCanvasSize } from '../../../../redux/canvasSize/actions';

export default () => {

  const dispatch = useAppDispatch();

  const SMALL_CANVAS_SIZE = 300;
  const MEDIUM_CANVAS_SIZE = 400;
  const LARGE_CANVAS_SIZE = 600;

  return (
    <Row>
      <Button
        onClick={ () => dispatch(setCanvasSize(SMALL_CANVAS_SIZE)) }
      >Small</Button>
      <Button
        onClick={ () => dispatch(setCanvasSize(MEDIUM_CANVAS_SIZE)) }
      >Small</Button>
      <Button
        onClick={ () => dispatch(setCanvasSize(LARGE_CANVAS_SIZE)) }
      >Small</Button>
    </Row>
  )
}