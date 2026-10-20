import styled from 'styled-components';

import * as utilities from "../../utilities";

import { StyledElementPropTypes } from './types';

const StyledRow = styled.div<StyledElementPropTypes>`
  display: flex;
  flex-direction: row;
  justify-content: ${ ({ $justifyContent }) => $justifyContent };
  align-items: ${ ({ $alignItems }) => $alignItems };

  ${ ({ ...spacingProps }) => utilities.styles.createMargins(spacingProps) };
  ${ ({ ...spacingProps }) => utilities.styles.createPaddings(spacingProps) };
`;

export default StyledRow;
