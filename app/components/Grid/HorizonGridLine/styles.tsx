import styled from "styled-components";

import { StyledElementPropTypes } from "./types";

const StyledVerticalGridLine = styled.div<StyledElementPropTypes>`
  width: 100%;
  height: 25;
  position: absolute;
  top: ${ ({ $row }) => $row * 25 };
  outline: 1px solid ${ ({ theme }) => theme.colors.neutral.default };
`;

export default StyledVerticalGridLine;
