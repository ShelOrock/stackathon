import styled from 'styled-components';

interface DivPropTypes {
  justifyContent?: string;
  alignItems?: string;
}

const RowsAndColumns = styled.div<DivPropTypes>`
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
  flex-direction: column;
  margin-top: -4rem;
`;

export const PaddedDiv = styled.div`
  margin: 0 0.5rem;
`;