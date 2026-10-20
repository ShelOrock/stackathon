import styled from 'styled-components';

import { StyledElementPropTypes } from './types';
import { Stage } from 'react-konva';

const StyledStage = styled(Stage)<StyledElementPropTypes>`
  background-color: ${ ({ theme }) => theme.colors.white };
  margin: 8px;
`;

export default StyledStage;
