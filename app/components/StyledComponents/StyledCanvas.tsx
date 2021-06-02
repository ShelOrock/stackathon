import styled, { css } from 'styled-components';

interface CanvasPropTypes {
  size: number;
};

interface HorizontalGridPositionPropTypes {
  row: number;
  division: number;
}

interface VerticalGridPositionPropTypes {
  width: number;
  height: number;
  column: number;
  division: number;
  size: string;
}

export const Canvas = styled.div<CanvasPropTypes>`
  background-color: ${ ({ theme }) => theme.colors.white.base };
  margin: 4rem auto 2rem;
  width: ${ ({ size }) => size };
  height: ${ ({ size }) => size };
  position: relative;
`;

export const GridSquare = css`
  margin: 0;
  padding: 0;
  border: none;
  position: absolute;
`;

export const HorizontalGridPosition = styled.div<HorizontalGridPositionPropTypes>`
  ${ GridSquare }
  top ${ ({ row, division }) => row * division };
`;

export const VerticalGridPosition = styled.div<VerticalGridPositionPropTypes>`
  ${ GridSquare }
  width: ${ ({ width }) => width };
  height ${ ({ height }) => height };
  left: ${ ({ column, division }) => column * division };
  outline: ${ ({ size }) => size == 'large' ? '2px' : '1px' } solid #EEE;
`