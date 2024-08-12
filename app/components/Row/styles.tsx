import styled from 'styled-components';

import { StyledElementPropTypes } from './types';

const StyledRow = styled.div<StyledElementPropTypes>`
  display: flex;
  flex-direction: row;
  justify-content: ${ ({ $justifyContent }) => $justifyContent };
  align-items: ${ ({ $alignItems }) => $alignItems };
`;

export default StyledRow;
