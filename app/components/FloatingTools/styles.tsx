import styled from "styled-components";

import { StyledElementPropTypes } from "./types";

const StyledFloatingTools = styled.div<StyledElementPropTypes>`
  position: absolute;
  top: ${ ({ $yPosition }) => `calc(${ $yPosition }px - 56px)`};
  left: ${ ({ $xPosition }) => `${ $xPosition }` };
`;

export default StyledFloatingTools;
