import * as React from 'react';

import * as StyledComponents from '../../StyledComponents';
import { ComponentMapping } from '../../ComponentMapping';
import { useIndexData } from '../../../hooks';
const { StyledCanvas: { HorizontalGridPosition, VerticalGridPosition } } = StyledComponents;

const GridSquare = ({ gridArray, row, divisionSize, size }) => {

  const { indexedData: indexedGridArray } = useIndexData(gridArray, "column");

  return (
    <HorizontalGridPosition
      row={ row }
      division={ divisionSize }
    >
      <ComponentMapping
        componentData={ indexedGridArray }
        renderComponent={ ({ column }) => (
          <VerticalGridPosition
            width={ divisionSize }
            height={ divisionSize }
            column={ column }
            division={ divisionSize }
            size={ size }
          />
        )}
      />
    </HorizontalGridPosition>
  )
};

export default GridSquare;
