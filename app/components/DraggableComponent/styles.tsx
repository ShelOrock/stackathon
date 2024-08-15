import styled from "styled-components";
import { Rnd } from "react-rnd";

import { StyledElementPropTypes } from "./types";

const StyledDraggableComponent = styled(Rnd)<StyledElementPropTypes>`
  z-index: ${({ $isDisabled }) => $isDisabled ? "0" : "1" };
`;

export default StyledDraggableComponent;
