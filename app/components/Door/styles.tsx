import styled from "styled-components";

import { StyledElementPropTypes } from "./types";

const StyledDoor = styled.div<StyledElementPropTypes>`
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ $width, $height, $orientation }) => $orientation == "NORTH_SOUTH" ? `translate(-${ $width / 2 }px, 0)` : `translate(0, -${ $height / 2 }px)` };
  border: 6px solid ${ ({ theme, $variant}) => theme.colors[$variant].base };
  box-sizing: border-box;
  width: ${ ({ $width }) => $width };
  height: ${ ({ $height }) => $height };
  background-color: ${ ({ theme, $variant }) => theme.colors[$variant].base };
`;

export default StyledDoor;
