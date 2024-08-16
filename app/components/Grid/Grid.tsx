import * as React from 'react';

import { useIndexData } from '../../hooks';

import ComponentMapping from '../ComponentMapping';
import VerticalGridLine from './VerticalGridLine';
import Row from '../Row';
import HorizonGridLine from './HorizonGridLine';

import { ComponentPropTypes } from './types';

const Grid: React.FC<ComponentPropTypes> = ({ canvasSize }) => {

  const DIVISION_SIZE = 25;

  const gridArray = [...Array(canvasSize / DIVISION_SIZE).keys()];

  const { indexedData: indexedGridArray } = useIndexData(gridArray, "gridLine");

  return (
    <Row>
      <ComponentMapping
        componentData={ indexedGridArray }
        renderComponent={ ({ gridLine }) => (
          <VerticalGridLine column={ gridLine } />
        ) }
      />
      <ComponentMapping
        componentData={ indexedGridArray }
        renderComponent={ ({ gridLine }) => (
          <HorizonGridLine row={ gridLine } />
        )}
      />
    </Row>
  );
};

export default Grid;
