import styled from "styled-components";

import * as utilities from "../../utilities";

import { StyledElementPropTypes } from "./types";

const StyledSlider = styled.input<StyledElementPropTypes>`
  ${ ({ ...spacingProps }) => utilities.styles.createMargins(spacingProps) };
  ${ ({ ...spacingProps }) => utilities.styles.createPaddings(spacingProps) };
`;

export default StyledSlider;
