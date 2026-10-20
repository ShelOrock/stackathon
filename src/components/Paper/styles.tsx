import styled from "styled-components";

import * as utilities from "../../utilities";

import { StyledElementPropTypes } from "./types";

const StyledPaper = styled.div<StyledElementPropTypes>`
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -2px,
    rgba(0, 0, 0, 0.2) 0px 1px 4px -3px;

  width: ${ ({ $width }) => $width };

  ${ ({ ...spacingProps }) => utilities.styles.createMargins(spacingProps) };
  ${ ({ ...spacingProps }) => utilities.styles.createPaddings(spacingProps) };
`;

export default StyledPaper;
