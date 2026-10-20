import styled from "styled-components";

import * as utilities from "../../utilities";

import { StyledElementPropTypes } from "./types";

const StyledInput = styled.input<StyledElementPropTypes>`
  padding: 2px 4px;
  font-size: 12px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: black;

  &:focus-visible {
    border-color: transparent;
    outline-width: 1.5px;
    outline-style: solid;
    outline-color: ${ ({ theme, $color }) => theme.colors[$color].default };
  };

  ${ ({ ...spacingProps }) => utilities.styles.createMargins(spacingProps) };
`;

export default StyledInput;
