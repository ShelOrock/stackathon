import * as React from 'react';

import GridSquare from './GridSquare';
import { ComponentMapping } from '../../ComponentMapping';
import { useIndexData } from '../../../hooks';

export default ({ size }) => {

  const DIVISION_SIZE = 25;

  const gridArray = [ ...Array(size / DIVISION_SIZE).keys() ];

  const { indexedData: indexedGridArray } = useIndexData(gridArray, "row");

  return (
    <ComponentMapping
      componentData={ indexedGridArray }
      renderComponent={ ({ row }) => (
        <GridSquare
          gridArray={ gridArray }
          row={ row }
          divisionSize={ DIVISION_SIZE }
          size={ 'small' }
        />
      ) }
    />
  );
};