import * as React from 'react';

import GridSquarePosition from './GridSquarePosition';

export default ({ size }) => {

  const DIVISION_SIZE = 25;

  const gridArray = [...Array(size / DIVISION_SIZE).keys()];

  return (
    <>
      { gridArray.map((_row, yPos) => <GridSquarePosition
        key={ yPos }
        gridArray={ gridArray }
        yPos={ yPos }
        divisionSize={ DIVISION_SIZE }
        size={ 'small' }
      /> )}
    </>
  );
};