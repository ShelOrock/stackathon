import styled, { css } from 'styled-components';

interface DivPropTypes {
  justifyContent?: string;
  alignItems?: string;
}

const RowsAndColumns = css<DivPropTypes>`
  display: flex;
  justify-content: ${ ({ justifyContent }) => justifyContent };
  align-items: ${ ({ alignItems }) => alignItems };
`;

export const Row = styled.div`
  ${ RowsAndColumns }
`;

export const Column = styled.div`
  ${ RowsAndColumns }
  flex-direction: column;
`

export const ElementHUDContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -4rem;
`;

export const PaddedDiv = styled.div`
  margin: 0 0.5rem;
`;