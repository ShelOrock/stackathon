import styled from 'styled-components';

import { StyledElementPropTypes } from './types';

const StyledCanvas = styled.div<StyledElementPropTypes>`
  background-color: ${ ({ theme }) => theme.colors.white };
  margin: 8px;
  width: ${ ({ $canvasSize }) => $canvasSize };
  height: ${ ({ $canvasSize }) => $canvasSize };
  position: relative;
`;

export default StyledCanvas;
