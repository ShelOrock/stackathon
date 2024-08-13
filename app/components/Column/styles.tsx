import styled from 'styled-components';

import { StyledElementPropTypes } from './types';

const StyledColumn = styled.div<StyledElementPropTypes>`
  display: flex;
  flex-direction: column;
  justify-content: ${ ({ $justifyContent }) => $justifyContent };
  align-items: ${ ({ $alignItems }) => $alignItems };
`;

export default StyledColumn;
