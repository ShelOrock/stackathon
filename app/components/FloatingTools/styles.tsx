import styled from "styled-components";

import { StyledElementPropTypes } from "./types";

const StyledFloatingTools = styled.div<StyledElementPropTypes>`
  position: absolute;
  top: ${ ({ $yPosition }) => `calc(${ $yPosition }px - 80px)`};
  left: ${ ({ $xPosition }) => `${ $xPosition }` };
`;

export default StyledFloatingTools;
