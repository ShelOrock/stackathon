import * as React from 'react';

import * as StyledComponents from '../../StyledComponents';
const { StyledCanvas: { HorizontalGridPosition, VerticalGridPosition } } = StyledComponents;

export default (props) => {

  return (
    <HorizontalGridPosition row={ props.yPos } division={ props.divisionSize }>
    { props.gridArray.map((_column, xPos) => {
      return <VerticalGridPosition
        key={ xPos }
        width={ props.divisionSize }
        height={ props.divisionSize }
        column={ xPos }
        division={ props.divisionSize }
        size={ props.size }
      />
    }) }
    </HorizontalGridPosition>
  )
}