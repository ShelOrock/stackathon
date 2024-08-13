import styled from "styled-components";

import { StyledElementPropTypes } from "./types";

const StyledVerticalGridLine = styled.div<StyledElementPropTypes>`
  width: 25;
  height: 100%;
  position: absolute;
  left: ${ ({ $column }) => $column * 25 };
  outline: 1px solid #EEE;
`;

export default StyledVerticalGridLine;
