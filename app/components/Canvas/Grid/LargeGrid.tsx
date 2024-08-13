import * as React from 'react';

import GridSquare from './GridSquare';
import { useIndexData } from '../../../hooks';
import { ComponentMapping } from '../../ComponentMapping';

export default ({ size }) => {

  const DIVISION_SIZE = 100;

  const gridArray = [...Array(size / DIVISION_SIZE).keys()];

  const { indexedData: indexedGridArray } = useIndexData(gridArray, "row");

  return (
    <ComponentMapping
      componentData={ indexedGridArray }
      renderComponent={ ({ row }) => (
        <GridSquare
          gridArray={ gridArray }
          row={ row }
          divisionSize={ DIVISION_SIZE }
          size={ 'large' }
        />
      ) }
    />
  );
};